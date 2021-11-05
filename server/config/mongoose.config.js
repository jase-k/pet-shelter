const mongoose = require("mongoose");
const dbNAME =  "petShelterSchema"

mongoose.connect("mongodb://localhost/"+dbNAME, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));