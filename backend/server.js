const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

// Correct the path to serve static files
app.use(express.static(path.join(__dirname, '../frontend'))); // Go up one level to root

// Serve the index.html from the frontend folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html')); // Go up one level to root
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
