import mongoose, { Schema, Document } from "mongoose";

export interface OnePieceCard extends Document {
  name: string;
  type: string;
  rarity: string;
  description: string;
  imageUrl: string;
  triggerEffect?: string
  // Add more fields as needed
}

/*
  ONE PIECE TCG card schema


*/

const CardSchema: Schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // 
  color: { type: String[], required: true }, // color inclu
  set: { type: String, required: true }, // gona be set box the card is from (e.g. "OP-01")
  imageUrl: { type: String, required: false},
  cardId: {type: String, required: true},
  triggerEffect: { type: String }

})

export default mongoose.model<OnePieceCard>('OnePieceCard', CardSchema)