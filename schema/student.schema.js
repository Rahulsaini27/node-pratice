var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    Name: String,
    Price: Number,
    Discount: Number,
    Color: String,
    Brand: String,
    Logo: String,
    Description: String,
    Date: Number,
    Country: String,
});

module.exports = mongoose.model(
    'student', StudentSchema, 'Students');