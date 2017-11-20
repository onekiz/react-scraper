const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {type:String, required: true},
    username: {type:String, default: Date.now},
    email: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    host: {type: Boolean, required: true },
    member: {type: Date}
})

const User = mongoose.model("User", userSchema);

module.exports = User;
