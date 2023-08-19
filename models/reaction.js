const { Schema, Types } = require('mongoose');

const mongoose = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            //use a getter method here?
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

//I still need to add the schema settings

module.exports = reactionSchema;
