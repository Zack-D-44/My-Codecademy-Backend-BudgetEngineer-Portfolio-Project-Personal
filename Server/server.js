// Require express
const express = require('express');
// Create express app instance
const app = express();

// Start server
app.listen(4000, () => {
    console.log('Server listening on port 4000');
})