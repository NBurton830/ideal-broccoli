const express = require('express');
const { createFeature, getAllFeatures } = require('../controllers/featureController');

const router = express.Router();

// Routes for features
router.post('/', createFeature);
router.get('/', getAllFeatures);

module.exports = router;
