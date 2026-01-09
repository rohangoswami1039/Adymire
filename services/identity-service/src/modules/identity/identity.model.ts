import mongoose from "mongoose";

const identitySchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

export const IdentityModel = mongoose.model("Identity", identitySchema);
