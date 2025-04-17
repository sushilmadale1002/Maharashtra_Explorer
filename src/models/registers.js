const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    PhoneNo: {
        type: Number,
        required: true,
        unique: true
    },
    Country: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});

// Create collection
const Register = mongoose.model("Register", userSchema);

module.exports = Register;