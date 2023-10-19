const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const filmSchema = new Schema({
  title: { type: String },
  director: { type: String },
  stars: { type: Array },
  image: { type: String },
  description: [String],
  showtimes: [String],
});


const Film = mongoose.model("Film", filmSchema);



module.exports = Film; 

