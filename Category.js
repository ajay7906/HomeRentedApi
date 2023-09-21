const mongoose = require("mongoose");

// Define the Tags schema
const categorySchema = new mongoose.Schema({
	house: {
		type: String,
		required: true,
	},
    room:{
        type: String,
		required: true,

    },
	description: { type: String },

	home: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Home",
		},
	],
});

// Export the Tags model
module.exports = mongoose.model("Category", categorySchema);