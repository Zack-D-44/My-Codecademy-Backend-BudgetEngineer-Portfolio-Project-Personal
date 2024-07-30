// Require express
const express = require('express')
const { envelopes } = require('../envelopes')

// Create manipulate values router

const manipulateEnvelopeValueRouter = express.Router()

// Add Money to envelope route
manipulateEnvelopeValueRouter.post(
  '/add-money/:category/:value',
  (req, res, next) => {
    const categoryToAddValueInObj = envelopes[req.params.category]
    const valueToAddToEnvelope = Number(req.params.value)

    const categoryValue = req.params.category

    // if value is a number and category exists add value and send envelopes
    if (valueToAddToEnvelope && categoryToAddValueInObj) {
      envelopes[categoryValue]['budget'] += valueToAddToEnvelope
      res.json(envelopes[categoryValue])
    } else {
      res.status(400).json({
        Reason:
          'Your value may not be a number or the category might not exist',
        'Current categories': envelopes,
      })
    }
  }
)

module.exports = manipulateEnvelopeValueRouter
