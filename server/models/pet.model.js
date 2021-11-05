const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const uniqueValidator = require("mongoose-unique-validator")

const PetSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is required"],
		minlength: [3, "name must be at least 6 characters long"],
		unique: true
	},
	typeNormalized: {
		type: String,
	},
	type: {
		type: String, 
		required: [true, "type is required!"],
		minlength: [3, "type must be at least 3 characters"]

	},
	description: {
		type: String,
		required: [true, "Description is required"],
		minlength: [3, "Description must be 3 characters or longer"]
	},
	skills :{
		type: Array, 
		maxlength: 3
	},
	likes : {
		type: Number,
		default: 0
	}
}, {timestamps: true});
PetSchema.plugin(uniqueValidator)

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;