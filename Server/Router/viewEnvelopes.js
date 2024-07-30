// Require express
const express = require('express')
const { envelopes } = require('../envelopes')

// Create Router
const viewEnvelopesRouter = express.Router()

// Route for viewing all envelopes
viewEnvelopesRouter.get('/', (req, res, next) => {
  // Send as json envelopes object
  res.status(200).json(envelopes)
})

// Route for viewing specific envelope
viewEnvelopesRouter.get('/:category', (req, res, next) => {
  const envelopeCategory = envelopes[req.params.category]

  if (envelopeCategory) {
    res.status(200).json(envelopeCategory)
  } else {
    res.status(404).send()
  }
})

module.exports = viewEnvelopesRouter
