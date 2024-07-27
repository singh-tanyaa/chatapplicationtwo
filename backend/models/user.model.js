import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
    },
}, { timestamps: true }); // createdAt & updatedAt

const User = mongoose.model("User", userSchema);//schema ko model m convert
export default User;
