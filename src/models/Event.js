const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        allowNull: true
    },
    date: {
        type: Date,
        required: true
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Event', EventSchema);