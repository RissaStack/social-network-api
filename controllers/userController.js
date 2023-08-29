const { User, Thought } = require('../models');

const getAllUsers = async (req, res) => {
    const users = await User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v',
        })
        .select('-__v');
    if (!users) {
        return res.status(404).json({ message: 'No users found!' });
    }
    return res.status(200).json(users);
};

const createUser = async (req, res) => {
    const user = await User.create(req.body);
    if (!user) {
        return res.status(404).json({ message: 'No user found!' });
    }
    return res.status(200).json(user);
};

const getUserById = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id })
        .populate({
            path: 'thoughts',
            select: '-__v',
        })
        .select('-__v');
    if (!user) {
        return res.status(404).json({ message: 'No user found!' });
    }
    return res.status(200).json(user);
};

const updateUser = async (req, res) => {
    const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }
    )
if (!user) {
    return res.status(404).json({ message: 'No user found!' });
}
return res.status(200).json(user);
};

const deleteUser = async (req, res) => {
    const user = await User.findOneAndDelete(
        { _id: req.params.id }
        );
    if (!user) {
        return res.status(404).json({ message: 'No user found!' });
    }
    return res.status(200).json(user);
};


module.exports = { getAllUsers, createUser, getUserById, updateUser, deleteUser};
