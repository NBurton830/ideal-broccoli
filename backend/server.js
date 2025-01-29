const express = require('express');
const connectDB = require('./config/db');  // Import the connectDB function

const app = express();

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
