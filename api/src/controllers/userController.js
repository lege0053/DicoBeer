import User from "../models/UserModel.js";

export async function getAllUsers (req, res) {
    try {
      const users = await User.find({})
      console.log(users)

      const usersWhitoutPassword = users.map((user) => {
        return { ...user, password: undefined };
      });

      res.json(usersWhitoutPassword);
      
    } catch (error) {
      console.error('Error getting all users:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  export async function getUserById (req, res) {
    console.log(req.body._id)
    try {
      const user = await User.findOne({ _id: req.body._id });

      if (!user) {
        return res.status(404).json({
          status: "error",
          data: [],
          message: "Utilisateur introuvable",
        });
      }

      return res.status(200).json({
        status: "success",
        data: [{...user, password:undefined}],
        message: "Utilisateur trouvé",
      });
    } catch (error) {
      console.error('Error getting user by ID:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  export async function getUserByEmail (req, res){
    try {
      const email = req.params.email;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
  
      res.json({ user });
    } catch (error) {
      console.error("Error during user search by email:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  export async function deleteUser (req, res){
    try {
      const { id } = req.body;
  
      if (!id) {
        return res.status(400).json({ message: "Missing user ID" });
      }
  
      const deleteResult = await User.deleteOne({ _id: ObjectId.createFromHexString(id) });
  
      if (deleteResult.deletedCount === 0) {
        return res.status(404).json({ message: "User not found" });
      }
  
      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error('Error deleting user:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  export async function updateUser (req, res) {
    try {
      const { pseudo, email } = req.body;
      const userId = req.user.id;
  
      const user = await User.findByIdAndUpdate(
        userId,
        { $set: { pseudo, email } },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
  
      res.json({ message: "Utilisateur mis à jour", user });
    } catch (error) {
      console.error("Error during user update:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  export async function changePassword (req, res){
    try {
      const { oldPassword, newPassword } = req.body;
      const userId = req.user.id;
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
  
      const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Mot de passe incorrect" });
      }
  
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await User.findByIdAndUpdate(userId, { $set: { password: hashedPassword } });
  
      res.json({ message: "Mot de passe modifié" });
    } catch (error) {
      console.error("Error during password change:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }