import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import habitRoutes from './routes/habits.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('server deployed!')
});


app.use('/habits', habitRoutes);
app.use('/users', userRoutes);


/* app.get('/', (req, res) =>{ 
    res.send('App is running');
}); */

const DB_CONNECTION_URL = process.env.MONGO_DB_URI;
const PORT = process.env.PORT || 5000;


mongoose.connect(DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

