// Create and Delete Envelopes
// Require express
const express = require('express');

// import envelope js file
const {envelops} = require('../envelops')

const manageEnvelopeRouter = express.Router();

//Route for creating envelope 
manageEnvelopeRouter.post('/create-envelope/:category', (req, res, next) => {
    const newCategory = req.params.category;
    // check if category already exists
    if(envelops[newCategory]){
        console.log('Category already exists')
        res.status(400).json({Reason: 'Envelope already exists'});
    }else{
        envelops[newCategory] = {
            budget: 0
        }

        res.status(201).send(envelops[newCategory]);
    }
});

// Route for deleting envelope
manageEnvelopeRouter.delete('/delete-envelope/:category', (req, res, next) => {

});


module.exports = { 
    manageEnvelopeRouter
};