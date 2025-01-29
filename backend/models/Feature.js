const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    userId: { type: String, required: true },
    status: { type: String, default: 'user-created' },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Feature', featureSchema);
