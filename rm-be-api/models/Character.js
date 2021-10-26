const mongoose = require('mongoose');

const CharSchema = mongoose.Schema(
    {
        id: {
            type: Number,
        },
        name: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        species: {
            type: String,
            required: true
        },
        type: {
            type: String,
        },
        gender: {
            type: String,
            required: true
        },
        origin: {
            type: Object,
            required: true
        },
        location: {
            type: Object,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        episode: {
            type: Array,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        created: {
            type: String,
            default: Date.now()
        },
        user_id: {
            type: String,
            required: true,
        }
            
    }
);

module.exports = mongoose.model('Character', CharSchema);
