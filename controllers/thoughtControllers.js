const { User, Thought } = require('../models');

//create a users thoughts
const createThought = async (req, res) => {
    const thought = await Thought.create(req.body);
    if (!thought) {
        return res.status(404).json({ message: 'No thought found!' });
    }
    
    const updatedUser = await User.findOneAndUpdate(
        {_id: req.body.userId},
        { $push: { thoughts: thought._id } },
        { new: true }
    );
    if (!updatedUser) {
        return res.status(404).json({ message: 'No user found!' });
    }
    return res.status(200).json(thought);
};


//get all thoughts
const getAllThoughts = async (req, res) => {
    const thoughts = await Thought.find({})
        .populate({
            path: 'thoughts',
            select: '-__v',
        })
        .select('-__v');
    if (!thoughts) {
        return res.status(404).json({ message: 'No thoughts found!' });
    }
    return res.status(200).json(thoughts);
};

//get one thought by id
const getThoughtById = async (req, res) => {
    const thought = await Thought.findOne({ _id: req.params.id })
        .populate({
            path: 'thoughts',
            select: '-__v',
        })
        .select('-__v');
    if (!thought) {
        return res.status(404).json({ message: 'No thought found!' });
    }
    return res.status(200).json(thought);
};

//update a thought by id
const updateThought = async (req, res) => {
    const thought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }
    )
if (!thought) {
    return res.status(404).json({ message: 'No thought found!' });
}
return res.status(200).json(thought);
};

//delete a thought by id
const deleteThought = async (req, res) => {
    const thought = await Thought.findOneAndDelete(
        { _id: req.params.id }
        );
    if (!thought) {
        return res.status(404).json({ message: 'No thought found!' });
    }
    return res.status(200).json(thought);
};


module.exports = { createThought, getAllThoughts, getThoughtById, updateThought, deleteThought };



