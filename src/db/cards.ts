import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  color: { type: String, required: true },
  set: { type: String, required: true },
})