import User from "../models/User.js";
const jwt = require('jsonwebtoken');
 
module.exports = async (req, res, next) => {
   try {
        // on récupère le token
        const authHeader = req.headers["cookie"];
        if (!authHeader) return res.sendStatus(401);
        const cookie = authHeader.split("=")[1]; 

        jwt.verify(cookie, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "La session a expiré. Veuillez vous reconnecter." });
            }

            const { userId } = decoded;
            const user = await User.findById(userId);
            const { password, ...data } = user._doc;
            req.user = data;
            next();
        });
   } catch(error) {
    res.status(500).json({
        status: "error",
        code: 500,
        data: [],
        message: "Internal Server Error",
    });
   }
};