import express from 'express';
import mongoose from 'mongoose';

import HabitItem from '../models/habits.js';

export const createHabit = async ( req, res ) => {
    const habit = req.body;
    console.log(habit);

    const newHabitPost = new HabitItem({ ...habit, createdAt: new Date().toISOString(), creator: req.userId });

    try {
        await newHabitPost.save();

        res.status(201).json(newHabitPost);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

export const getHabits = async (req, res) => {
    const loggedUser = req.userId;

    try {
       const allHabits = await HabitItem.find({ creator: loggedUser});
       res.status(200).json(allHabits);
    } catch (err) {
        res.status(404).json({ message: err.message });
    };
};

export const editHabit = async(req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { title, _id: id };

    await HabitItem.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
};

export const updateTime = async (req, res) => {
    const { id } = req.params;
    const newTime = new Date();

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedTime = { createAt : newTime, _id: id };

    await HabitItem.findByIdAndUpdate(id, updatedTime, { new: true });

    res.json(updatedTime);
}

export const deleteHabit = async(req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await HabitItem.findByIdAndRemove(id);

    res.json({ message: 'Post Deleted' });
}