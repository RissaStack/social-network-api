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

module.exports = { getAllUsers };
