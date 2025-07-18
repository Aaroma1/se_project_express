const mongoose = require("mongoose");

const clothingItemSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("item", clothingItemSchema);
