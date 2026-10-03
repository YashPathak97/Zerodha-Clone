const { model } = require('mongoose');

const { HoldingsSchema } = require('../schemas/HoldingsSchema');

const HoldingsModel = new model('holding', HoldingsSchema);

module.exports = { HoldingsModel };


// MODELS ARE USED TO INTERACT WITH THE DATABASE. THEY PROVIDE AN INTERFACE FOR CREATING, READING, UPDATING, AND DELETING DOCUMENTS IN A COLLECTION BASED ON THE DEFINED SCHEMA.