const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema ({
    time: {type:String, required: true},
    location: {type:String},
    description: {type:String, required: true, unique: true},
    numberAttendees: {type:Number, required: true}
})

const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;
