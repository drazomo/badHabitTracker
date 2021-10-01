import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModel from '../models/user.js';

const secret = 'secret';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const exisitingUser = await UserModel.findOne({ email });
        if(!exisitingUser) return res.status(404).json({ message: 'User not found' });

        const passwordIsCorrect = await bcrypt.compare(password, exisitingUser.password);
        if(!passwordIsCorrect) return res.status(400).json({ message : 'Invalid Credentials' });

        const token = jwt.sign({ email: exisitingUser.email, id: exisitingUser._id }, secret, { expiresIn: '1hr' });
        res.status(200).json({ result: exisitingUser, token });
    } catch (err) {
        res.status(500).json({ message: 'something went wrong' });
    }
};

export const signup = async (req, res) => {
    const { email, password, confirmedPassword, firstName, lastName } = req.body;

    try {
        const exisitingUser = await UserModel.findOne({ email });

        if(exisitingUser) return res.status(400).json({ message: 'User Already Exisit!' });
        if(password !== confirmedPassword) return res.status(400).json({ message: 'Passwords do not match!' }); 

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UserModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: '1hr' });

        res.status(201).json({ result, token });

    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
        console.log(err);
    };
};