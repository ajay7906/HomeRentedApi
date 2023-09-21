const mongoose = require("mongoose");

// Define the Courses schema
const coursesSchema = new mongoose.Schema({
	

	owner: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "user",
	},
	
	userRentEnroll: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "user",
		},
	],
    selectLocal:{
        type: String,
			required: true,
			trim: true,
    },
    addressProperties:{
        type: String,
        required: true,
        trim: true,

    },
    houseNum:{
        type: Number,
        required: true,
        trim: true,

    }

},
{ timestamps: true }
);

// Export the Courses model
module.exports = mongoose.model("Course", coursesSchema);