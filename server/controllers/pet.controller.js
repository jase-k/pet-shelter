const { response } = require("express");
const Pet = require("../models/pet.model");

module.exports.index = (req, res) => {
  res.json({
    message: "You are Connected to the DB"
  })
}
module.exports.findAllPets = (req, res) => {
  Pet.find({},[],{sort: {typeNormalized:"asc" }})
    .then(allPets => res.json({ pets: allPets }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSinglePet = (req, res) => {
	Pet.findOne({ _id: req.params.id })
		.then(onePet => res.json({ pet: onePet }))
		.catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.createNewPet = (req, res) => {
  let pet = req.body;
  pet.typeNormalized = req.body.type.toLowerCase();
  Pet.create(pet)
    .then(newPet => res.json({ pet: newPet }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingPet = (req, res) => {
  let pet = req.body;
  pet.typeNormalized = pet.type.toLowerCase();
  Pet.findOneAndUpdate({ _id: req.params.id }, pet, { new: true })
    .then(updatedPet => res.json({ pet: updatedPet }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingPet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};
