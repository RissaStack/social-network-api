const { Schema, Types } = require('mongoose');

const mongoose = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String.trim(),
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+..+/, 'Must match an email address!'],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friends: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
}
{
    toJSON: {
      getters: true,
    },
  });

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

module.exports = User;
