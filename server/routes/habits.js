import express from 'express';
import { createHabit, editHabit, getHabits, deleteHabit, updateTime } from '../controllers/habits.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createHabit);
router.get('/', auth, getHabits);
router.patch('/:id', auth, editHabit);
router.patch('/:id/updateTime', auth, updateTime);
router.delete('/:id', auth, deleteHabit);

export default router;