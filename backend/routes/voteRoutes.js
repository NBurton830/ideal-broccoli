const express = require('express');
const { voteOnFeature } = require('../controllers/voteController');

const router = express.Router();

// Route for voting on a feature
router.post('/:featureId', voteOnFeature);

module.exports = router;
