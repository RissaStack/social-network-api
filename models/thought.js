const { Schema, Types } = require('mongoose');

const mongoose = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String.trim(),
        required: true,
        min_length: 1,
        max_length: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //use a getter method here?
    },
    username: [
        {
            type: String.trim(),
            required: true,
        },
    ],
    reactions: {
        //array of nested documents created with the reactionSchema
    },
}
{
    toJSON: {
      getters: true,
    },
  });

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

module.exports = User;
