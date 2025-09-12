import mongoose from "mongoose";

const ProfileViewSchema = new mongoose.Schema({
  count: { type: Number, default: 0 }
});

export default mongoose.model("ProfileView", ProfileViewSchema);
