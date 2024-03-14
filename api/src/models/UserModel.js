import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/index.js';

const UserSchema = new mongoose.Schema(
    {
        pseudo: {
            type: String,
            required: "Your pseudo is required",
            max: 25,
        },
        email: {
            type: String,
            required: "Your email is required",
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: "Your password is required",
            select: false,
            max: 25,
        },
        birthdate: {
            type: Date,
            required: "Your birthdate is required",
        },
        role: {
            type: String,
            required: true,
            default: "0x01",
        },
    },
    { timestamps: true }
);

UserSchema.pre("save", function (next) {
    const user = this;

    if (!user.isModified("password")) return next();
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.generateAccessJWT = function () {
    let payload = {
      id: this._id,
    };
    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: '1h',
    });
  };

export default mongoose.model("users", UserSchema);