const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide title name"],
      maxlength: 100,
    },
    author: {
      type: String,
      required: [true, "Please provide author name"],
      maxlength: 50,
    },
    genre: {
      type: String,
      required: [true, "Please provide genre"],
    },
    publication_year: {
      type: Number,
      required: [true, "Please provide publication year"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
