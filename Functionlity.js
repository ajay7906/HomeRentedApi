const mongoose = require("mongoose");

// Define the Courses schema
const coursesSchema = new mongoose.Schema({
	

	home: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Home",
	},
	

    light:{
        type: Boolean,
			required: true,
			trim: true,
    },
    tabs:{
        type: Boolean,
        required: true,
        trim: true,

    },
    kitchen:{
        type: Boolean,
        required: true,
        trim: true,

    },
    bathroom:{
        type: Boolean,
        required: true,
        trim: true,

    },
    geyson:{
        type: Number,
        required: true,
        trim: true,

    }

},
{ timestamps: true }
);

// Export the Courses model
module.exports = mongoose.model("Course", coursesSchema);