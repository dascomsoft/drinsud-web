const express = require('express');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');
const auth = require('../middleware/auth');
const router = express.Router();

// Configuration du stockage Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'drinsud/annonces',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
    transformation: [
      { width: 1200, height: 800, crop: 'limit', quality: 'auto' },
      { fetch_format: 'auto' }
    ],
    public_id: (req, file) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      return `annonce-${uniqueSuffix}`;
    }
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(file.originalname.toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Seules les images sont autorisées (JPEG, PNG, GIF, WEBP)'));
    }
  }
});

// Route d'upload
router.post('/', auth, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Aucun fichier uploadé' });
    }
    
    res.json({
      success: true,
      message: 'Image uploadée avec succès',
      imageUrl: req.file.path, // URL Cloudinary
      publicId: req.file.filename,
      width: req.file.width,
      height: req.file.height
    });
  } catch (error) {
    console.error('Erreur upload:', error);
    res.status(500).json({ message: error.message });
  }
});

// Route pour supprimer une image
router.delete('/:publicId', auth, async (req, res) => {
  try {
    const result = await cloudinary.uploader.destroy(`drinsud/annonces/${req.params.publicId}`);
    res.json({ success: true, message: 'Image supprimée', result });
  } catch (error) {
    console.error('Erreur suppression:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;