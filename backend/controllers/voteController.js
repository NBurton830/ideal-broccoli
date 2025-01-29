const Vote = require('../models/Vote');
const Feature = require('../models/Feature');

// Vote on a feature
exports.voteOnFeature = async (req, res) => {
    const { featureId } = req.params;
    const { userId, voteType } = req.body;

    try {
        // Check if the vote already exists
        const existingVote = await Vote.findOne({ userId, featureId });
        if (existingVote) {
            return res.status(400).json({ message: 'User has already voted on this feature.' });
        }

        // Create new vote
        const vote = new Vote({
            featureId,
            userId,
            voteType,
        });

        await vote.save();

        // Update the feature's vote count
        const feature = await Feature.findById(featureId);
        feature.voteCount = (feature.voteCount || 0) + (voteType === 'upvote' ? 1 : -1);
        await feature.save();

        res.status(200).json(vote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
