const mongoose = require('mongoose');

// Define the schema
const ApplicationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'is invalid'] // Email validation
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        match: [/^\d{10,15}$/, 'Phone number must be valid'] // Validates phone numbers between 10-15 digits
    },
    cv: {
        type: Buffer,
        required: true
    },
    coverLetters: [{
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        submittedAt: {
            type: Date,
            default: Date.now
        }
    }]
}, {
    timestamps: true 
});

const Application = mongoose.model('Application', ApplicationSchema);

module.exports = Application;
