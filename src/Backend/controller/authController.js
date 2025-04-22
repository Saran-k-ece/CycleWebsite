const User = require('../model/userModel');
const bcrypt = require('bcrypt');

// Login User
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json('Invalid credentials');
        }

        res.status(200).json('success');
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
};

// Sign Up User
exports.signupUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json('User already exists');
        }

        user = new User({ name, email, password });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        res.status(201).json('User registered successfully');
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
};
