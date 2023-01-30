const mongoose = require('mongoose');

const StringSchema = new mongoose.Schema({
    stg: String,
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
});

module.exports = mongoose.model('String', StringSchema);