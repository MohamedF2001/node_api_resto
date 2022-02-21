const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const restoSchema = new mongoose.Schema({
    resto: { type: String, required: true },
    detail: { type: String, required: false },
    frozen: { type: Boolean, required: false },
    num: { type: String, required: false },
    adresse: { type: String, required: false },
});

restoSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Resto', restoSchema);