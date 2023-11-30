const mongoose = require("mongoose")
const SportsSchema = mongoose.Schema({
SportsCar: String,
Sportsbike: {type: String,
    minlength: 2,
    maxlength: 10},
Sportsperson:{type: String,
minlength: 3,
maxlength: 100}
})
module.exports = mongoose.model("Sports",
SportsSchema)
