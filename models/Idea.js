const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add text content'],
    },
    tag: {
      type: String,
    },
    username: {
      type: String,
    },
    date: {
      type: Date,
      default: new Date(),
    },
  }
  //   {
  //     timestamps: true,
  //   }
);

module.exports = mongoose.model('Idea', IdeaSchema);
