const { ObjectId } = require('mongodb');
const { userCollection } = require("../database");
const bcrypt = require('bcrypt');

const userController = {

  getAllUsers: async (req, res) => {
    try {
      const users = await userCollection.find({}).toArray();

      const usersWhitoutPassword = users.map((user) => {
        return { ...user, password: undefined };
      });

      res.json(usersWhitoutPassword);
      
    } catch (error) {
      console.error('Error getting all users:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getUserById: async (req, res) => {
    try {
      const userId = req.params.id;
    
      if (!ObjectId.isValid(userId)) {
        return res.status(400).json({ message: 'Invalid user ID format' });
      }
      
      const objectId = ObjectId.createFromHexString(userId);

      const user = await userCollection.findOne({ _id: objectId });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({ ...user, password: undefined });
    } catch (error) {
      console.error('Error getting user by ID:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  createUser: async (req, res) => {
    try {
      const { pseudo, email, password, birthdate, role } = req.body;
  
      if (!pseudo || !email || !password || !birthdate || !role) {
        return res.status(400).json({ message: 'Données utilisateur incomplètes' });
      }

      // Vérifier si l'email existe déjà
      const existingUser = await userCollection.findOne({ email });

      if (existingUser) {
        return res.status(409).json({ message: 'Adresse email déjà utilisée' });
      }
  
      // Hachage du mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Créer un nouvel utilisateur
      const user = {
        pseudo,
        email,
        password: hashedPassword,
        birthdate,
        role,
      };
  
      const result = await userCollection.insertOne(user);
  
      if (!result.acknowledged) {
        return res.status(500).json({ message: "Échec de la création de l'utilisateur" });
      }
  
      res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteUser: async (req, res)=> {
    try {
      const { id } = req.body;
  
      if (!id) {
        return res.status(400).json({ message: "Missing user ID" });
      }
  
      const deleteResult = await userCollection.deleteOne({ _id: ObjectId.createFromHexString(id) });
  
      if (deleteResult.deletedCount === 0) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find user by email
      const user = await userCollection.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email' });
      }

      // Compare hashed passwords using bcrypt
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      // Login successful, generate and send token (optional)
      // ... (implement token generation logic, e.g., using JWT)

      res.json({ message: 'Login successful', user: { ...user, password: undefined } });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  logout: async (req, res) => {
    try {
      // Implement logout logic (e.g., clear session data, invalidate token)
      // You can customize this based on your authentication scheme
      res.json({ message: 'Logout successful' });
    } catch (error) {
      console.error('Error during logout:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = userController;
