require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/kanban-app', // MongoDB URI
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key', // Secret key for JWT (if using authentication)
    port: process.env.PORT || 5000, // Default port
};
