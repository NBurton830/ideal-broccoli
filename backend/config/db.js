const mongoose = require('mongoose');
require('dotenv').config();  // To use environment variables

const connectDB = async () => {
  try {
    const db = process.env.MONGO_URI;  // Mongo URI from the .env file
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;  // Make sure connectDB is exported correctly
