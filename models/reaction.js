const { Schema, Types } = require('mongoose');

const mongoose = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {},
    reactionBody: {
        type: String.trim(),
        required: true,
        max_length: 280,
    },
    username: [
        {
            type: String.trim(),
            required: true,
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
        //use a getter method here?
    },
}
{
    toJSON: {
      getters: true,
    },
  });

//I still need to add the schema settings

module.exports = User;
