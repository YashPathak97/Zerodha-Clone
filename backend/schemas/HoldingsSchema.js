const {Schema} = require('mongoose');

const HoldingsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = {HoldingsSchema};


// SCHEMAS ARE MADE TO DEFINE THE STRUCTURE OF THE DATA THAT WILL BE STORED IN THE DATABASE. THEY ACT AS BLUEPRINTS FOR CREATING DOCUMENTS IN A COLLECTION. 