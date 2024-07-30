// Require express
const express = require('express');

// Create Router
const viewEnvelopesRouter = express.Router();

// Route for viewing all envelopes
viewEnvelopesRouter.get('/', (req, res, next) => {

});

// Route for viewing specific envelope
viewEnvelopesRouter.get('/:category', (req, res, next) => {

});


module.exports = viewEnvelopesRouter;