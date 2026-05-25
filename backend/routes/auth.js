// const express = require('express');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const auth = require('../middleware/auth');  // ← AJOUTE CETTE LIGNE
// const router = express.Router();

// // Login
// router.post('/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;
    
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: 'Identifiants invalides' });
//     }
    
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Identifiants invalides' });
//     }
    
//     const token = jwt.sign(
//       { id: user._id, username: user.username, role: user.role },
//       process.env.JWT_SECRET || 'secretkey',
//       { expiresIn: '7d' }
//     );
    
//     res.json({
//       token,
//       user: {
//         id: user._id,
//         username: user.username,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur serveur' });
//   }
// });

// // Créer admin initial (à supprimer après première utilisation)
// router.post('/setup', async (req, res) => {
//   try {
//     const existingAdmin = await User.findOne({ role: 'admin' });
//     if (existingAdmin) {
//       return res.status(400).json({ message: 'Admin déjà existant' });
//     }
    
//     const admin = new User({
//       username: 'drinsud_admin',
//       email: 'admin@drinsud.com',
//       password: 'Admin123!',
//       role: 'admin',
//     });
    
//     await admin.save();
//     res.json({ message: 'Admin créé avec succès', credentials: { username: 'drinsud_admin', password: 'Admin123!' } });
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur serveur' });
//   }
// });

// // Changer le mot de passe
// router.post('/change-password', auth, async (req, res) => {
//   try {
//     const { currentPassword, newPassword } = req.body;
//     const userId = req.user.id;
    
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'Utilisateur non trouvé' });
//     }
    
//     const isMatch = await user.comparePassword(currentPassword);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Mot de passe actuel incorrect' });
//     }
    
//     user.password = newPassword;
//     await user.save();
    
//     res.json({ message: 'Mot de passe modifié avec succès' });
//   } catch (error) {
//     console.error('Erreur changement mot de passe:', error);
//     res.status(500).json({ message: 'Erreur serveur' });
//   }
// });

// module.exports = router;









const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');  // ← AJOUTE CETTE LIGNE
const router = express.Router();

// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Identifiants invalides' });
    }
    
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Identifiants invalides' });
    }
    
    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '7d' }
    );
    
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Créer admin initial (à supprimer après première utilisation)
router.post('/setup', async (req, res) => {
  try {
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin déjà existant' });
    }
    
    const admin = new User({
      username: 'drinsud_admin',
      email: 'admin@drinsud.com',
      password: 'Admin123!',
      role: 'admin',
    });
    
    await admin.save();
    res.json({ message: 'Admin créé avec succès', credentials: { username: 'drinsud_admin', password: 'Admin123!' } });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Changer le mot de passe
router.post('/change-password', auth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user.id;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    
    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(401).json({ message: 'Mot de passe actuel incorrect' });
    }
    
    user.password = newPassword;
    await user.save();
    
    res.json({ message: 'Mot de passe modifié avec succès' });
  } catch (error) {
    console.error('Erreur changement mot de passe:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;