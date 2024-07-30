// Require express
const express = require('express');
const { envelopes } = require('../envelopes');

// Create manipulate values router

const manipulateEnvelopeValueRouter = express.Router();

// Add Money to envelope route
manipulateEnvelopeValueRouter.post('/add-money/:category/:value', (req, res, next) => {
  const categoryToAddValueInObj = envelopes[req.params.category];
  const valueToDeduceFromEnvelope = Number(req.params.value);

  const categoryValue = req.params.category;

  // if value is a number and category exists add value and send envelopes
  if (valueToDeduceFromEnvelope && categoryToAddValueInObj) {
    envelopes[categoryValue]['budget'] += valueToDeduceFromEnvelope;
    res.json(envelopes[categoryValue]);
  } else {
    // Respond with error and possible reason and current existing categories
    res.status(400).json({
      Reason: 'Your value may not be a number or the category might not exist',
      'All Existing Categories': Object.keys(envelopes),
    });
  }
});

manipulateEnvelopeValueRouter.post('/deduce-money/:category/:value', (req, res, next) => {
  const categoryToAddValueInObj = envelopes[req.params.category];
  const valueToDeduceFromEnvelope = Number(req.params.value);

  const categoryValue = req.params.category;

  // if value is a number and category exists deduce value and send envelopes
  if (valueToDeduceFromEnvelope && categoryToAddValueInObj) {
    const newBudgetForCategory = envelopes[categoryValue][budget] - valueToDeduceFromEnvelope;
  } else {
    // Respond with error and possible reason and current existing categories
    res.status(400).json({
      Reason: 'Your value may not be a number or the category might not exist',
      'All Existing Categories': Object.keys(envelopes),
    });
  }
});

module.exports = manipulateEnvelopeValueRouter;
