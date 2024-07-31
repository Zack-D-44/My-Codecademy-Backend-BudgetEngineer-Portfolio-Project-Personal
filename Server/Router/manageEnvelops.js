// Create and Delete Envelopes
// Require express
const express = require('express');

// import envelope js file
const { envelopes } = require('../envelopes');

const manageEnvelopeRouter = express.Router();

//Route for creating envelope
manageEnvelopeRouter.post('/create-envelope/:category', (req, res, next) => {
  const newCategory = req.params.category;
  // check if category already exists
  if (envelopes[newCategory]) {
    console.log('Category already exists');
    res.status(400).json({ Reason: 'Envelope already exists' });
  } else {
    envelopes[newCategory] = {
      budget: 0,
    };

    res.status(201).send(envelopes[newCategory]);
  }
});

// Route for deleting envelope
manageEnvelopeRouter.delete('/delete-envelope/:category', (req, res, next) => {
  // category to delete
  const categoryToDelete = req.params.category;

  //if envelope in object delete it
  if (envelopes[categoryToDelete]) {
    delete envelopes[categoryToDelete];
    res.status(200).json({
      Response: `${categoryToDelete} Envelope Deleted`,
    });
  } else {
    // if not send user error code
    res.status(400).json({
      Reason: 'Envelope provided was not an existing envelope',
    });
  }
});

module.exports = {
  manageEnvelopeRouter,
};
