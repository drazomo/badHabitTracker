import express from 'express';
import { createHabit, editHabit, getHabits, deleteHabit, updateTime } from '../controllers/habits.js';

const router = express.Router();

router.post('/', createHabit);
router.get('/', getHabits);
router.patch('/:id', editHabit);
router.patch('/:id/updateTime', updateTime);
router.delete('/:id', deleteHabit);

export default router;