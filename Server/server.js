// Require express
const express = require('express')
const { manageEnvelopeRouter } = require('./Router/manageEnvelops')
const viewEnvelopesRouter = require('./Router/viewEnvelopes')
const manipulateEnvelopeValueRouter = require('./Router/manipulateEnvelopeValues')
// Create express app instance
const app = express()

// use all routers
app.use('/manage-envelopes', manageEnvelopeRouter)
app.use('/view-envelopes', viewEnvelopesRouter)
app.use('/manipulate-envelopes', manipulateEnvelopeValueRouter)

// Start server
app.listen(4000, () => {
  console.log('Server listening on port 4000')
})
