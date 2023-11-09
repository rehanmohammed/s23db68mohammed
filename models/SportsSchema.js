const mongoose = require("mongoose")
const SportsSchema = mongoose.Schema({
SportsCar: String,
Sportsperson: String,
sportsbike: String
})
module.exports = mongoose.model("Sports",
SportsSchema)
