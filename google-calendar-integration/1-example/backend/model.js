// import the mongoose dependencies
const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;

// Create a schema
const SkateParkSchema = new Schema({
	skateparkName: {type: String, required: false},
	skateparkDesc: {type: String, required: false},
	skateparkRating: {type: Number, required: false},
	skateparkLocation: {type: [Number], required: false}, // [Long, Lat]
	skateparkImages: {type: Array, required: false},
	skateparkTags: {type: Array, required: false},
	skateparkAdder: String,
	createdAt: {type: Date, default: Date.now}
});

// Sets the created entry equal to the current time
SkateParkSchema.pre('save', (next) => {

	now = new Date();

	if(!this.created) this.created_at = now;

	next();

});

// Exports the Schema for use elsewhere. The MongoDB collection will be called 'skateparks'
module.exports = mongoose.model('skateparks', SkateParkSchema);

