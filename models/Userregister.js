const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const registerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        require: true,
    },
    role: {
        type: String,
    },
})


registerSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("Userregister", registerSchema);