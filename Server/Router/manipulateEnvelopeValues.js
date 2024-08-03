// Require express
const express = require('express');
const { envelopes } = require('../envelopes');
const e = require('express');

// Create manipulate values router

const manipulateEnvelopeValueRouter = express.Router();

const errorHandler = (err, req, res, next) => {
  res.status(500).send();
};

// Add Money to envelope route
manipulateEnvelopeValueRouter.put('/add-money/:category/:value', (req, res, next) => {
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

manipulateEnvelopeValueRouter.put('/deduce-money/:category/:value', (req, res, next) => {
  const categoryToAddValueInObj = envelopes[req.params.category];
  const valueToDeduceFromEnvelope = Number(req.params.value);

  const categoryValue = req.params.category;

  // if value is a number and category exists deduce value and send envelopes
  if (valueToDeduceFromEnvelope && categoryToAddValueInObj) {
    const newBudgetForCategory = envelopes[categoryValue]['budget'] - valueToDeduceFromEnvelope;

    // if budget goes below zero throw error
    if (newBudgetForCategory < 0) {
      throw new Error(
        `Attempting to takeaway ${valueToDeduceFromEnvelope} made the categories budget go into the negative values, this is not possible`,
      );
    }

    envelopes[req.params.category]['budget'] = newBudgetForCategory;

    res.status(200).send(envelopes[req.params.category]);
  } else {
    // Respond with error and possible reason and current existing categories
    res.status(400).json({
      Reason: 'Your value may not be a number or the category might not exist',
      'All Existing Categories': Object.keys(envelopes),
    });
  }
});

// post route for tranfering values from one envelope to another
manipulateEnvelopeValueRouter.put(
  '/transfer-money/:categoryfrom/:categoryto/:amount',
  (req, res, next) => {
    const categoryToTransferFrom = req.params.categoryfrom;
    const categoryToTransferTo = req.params.categoryto;
    let amountToTransfer = req.params.amount; //if amount == * we transfer all from

    if (amountToTransfer !== '*' && typeof amountToTransfer !== 'number') {
      amountToTransfer = Number(amountToTransfer);

      // check if value will not be equal to a negative amount
      if (envelopes[categoryToTransferFrom]['budget'] - amountToTransfer > 0) {
        // transfer money accross
        envelopes[categoryToTransferFrom]['budget'] -= amountToTransfer;
        envelopes[categoryToTransferTo]['budget'] += amountToTransfer;

        res.status(200).json({
          envelopeFrom: envelopes[categoryToTransferFrom],
          envelopeTo: envelopes[categoryToTransferTo],
        });
      } else {
        // throw error if value would be negative
        throw new Error('Insufficient category funds');
      }
    } else {
      amountToTransfer = Number(amountToTransfer);

      // transfer all funds over
      envelopes[categoryToTransferTo]['budget'] += envelopes[categoryToTransferFrom]['budget'];
      envelopes[categoryToTransferFrom]['budget'] -= envelopes[categoryToTransferFrom]['budget'];

      res.status(200).send({
        'Envelope from': envelopes[categoryToTransferFrom],
        'Envelope To': envelopes[categoryToTransferTo],
      });
    }
  },
);
// pick up here
module.exports = manipulateEnvelopeValueRouter;
