const mongoose = require("mongoose");

// Define the Courses schema
const coursesSchema = new mongoose.Schema({
	
	courseDescription: { type: String },
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "user",
	},
	
	localLocation: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "LocalLocation",
		},
	],
    quantity: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Quantity",
		},
	],
    functionlity: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Functionlity",
		},
	],
	ratingAndReviews: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "RatingAndReview",
		},
	],
	price: {
		type: Number,
	},
    image: {
        type: String,
        required: true,
    },
	thumbnail: {
		type: String,
	},
	
	category: {
		type: mongoose.Schema.Types.ObjectId,
		// required: true,
		ref: "Category",
	},
	userRentEnroll: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "user",
		},
	],
	instructions: {
		type: [String],
	},
	status: {
		type: String,
		enum: ["Unsold", "Sold"],
	},
},
{ timestamps: true }
);

// Export the Courses model
module.exports = mongoose.model("Course", coursesSchema);