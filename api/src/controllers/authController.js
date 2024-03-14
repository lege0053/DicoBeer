import User from "../models/UserModel.js";
import Blacklist from '../models/BlacklistModel.js';
import bcrypt from "bcrypt";

/**
 * @route POST api/auth/register
 * @desc Registers a user
 * @access Public
 */
export async function Register(req, res){
    const { pseudo, email, password, birthdate } = req.body;
    try {
    // create an instance of a user
    const newUser = new User({
        pseudo,
        email,
        password,
        birthdate,
    });

    //  Check if user is older than 18
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    if (birthdate > eighteenYearsAgo)
      res.status(400).json({
        status: "failed",
        data: [],
        message: "Vous devez être âgé(e) de 18 ans ou plus.",
    });

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
        res.status(400).json({
            status: "failed",
            data: [],
            message: "Il semble que vous ayez déjà un compte.",
        });
        
    const savedUser = await newUser.save(); // save new user into the database
    const { role, ...user_data } = savedUser;
    res.status(200).json({
        status: "success",
        data: [savedUser],
        message:
            "Merci de vous être inscrit chez nous. Votre compte à été créé avec succès.",
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: "Internal Server Error",
  });
}
res.end();
}

/**
 * @route POST api/auth/login
 * @desc logs in a user
 * @access Public
 */
export async function Login(req, res) {
  // Get variables for the login process
  const { email } = req.body;
  try {
      // Check if user exists
      const user = await User.findOne({ email }).select("+password");
      if (!user)
          return res.status(401).json({
              status: "failed",
              data: [],
              message: "Le compte n'existe pas.",
          });
      // if user exists
      // validate password
      const isPasswordValid = await bcrypt.compare(
          `${req.body.password}`,
          user.password
      );
      // if not valid, return unathorized response
      if (!isPasswordValid)
          return res.status(401).json({
              status: "failed",
              data: [],
              message:
                  "Email ou mot de passe invalide.",
          });

      let options = {
          maxAge: 60 * 60 * 1000, // expire in 1h
          httpOnly: true, // The cookie is only accessible by the web server
          secure: true,
          sameSite: "None",
      };
      const token = user.generateAccessJWT(); // generate session token for user
      res.cookie("SessionID", token, options); // set the token to response header, so that the client sends it back on each subsequent request
      res.status(200).json({
          status: "success",
          data: [user],
          message: "Vous êtes connecté",
      });
  } catch (err) {
      res.status(500).json({
          status: "error",
          code: 500,
          data: [],
          message: "Internal Server Error",
      });
  }
  res.end();
}

/**
 * @route POST /auth/logout
 * @desc Logout user
 * @access Public
 */
export async function Logout(req, res) {
    try {
      const authHeader = req.headers['cookie']; // get the session cookie from request header
      if (!authHeader) return res.sendStatus(204); // No content
      const cookie = authHeader.split('=')[1]; // If there is, split the cookie string to get the actual jwt token
      const accessToken = cookie.split(';')[0];
      const checkIfBlacklisted = await Blacklist.findOne({ token: accessToken }); // Check if that token is blacklisted
      // if true, send a no content response.
      if (checkIfBlacklisted) return res.sendStatus(204);
      // otherwise blacklist token
      const newBlacklist = new Blacklist({
        token: accessToken,
      });
      await newBlacklist.save();
      // Also clear request cookie on client
      res.setHeader('Clear-Site-Data', '"cookies"');
      res.status(200).json({ message: 'Vous êtes déconnecté!' });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
      });
    }
    res.end();
  }