const { Schema } = require('mongoose');

const UsersSchema = new Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
});

module.exports = { UsersSchema };