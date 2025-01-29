const express = require('express');
const router = express.Router();
const Feature = require('../../models/Feature');

// @route POST api/features
// @desc Create a new feature
// @access Public
router.post('/', async (req, res) => {
  try {
    const { title, description, category, userId } = req.body;

    const newFeature = new Feature({
      title,
      description,
      category,
      userId,
    });

    await newFeature.save();
    res.json(newFeature);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route GET api/features
// @desc Get all features
// @access Public
router.get('/', async (req, res) => {
  try {
    const features = await Feature.find();
    res.json(features);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
