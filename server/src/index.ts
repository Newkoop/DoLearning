import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

mongoose.connect('mongodb://localhost:27017/myapp');
const app = express();
app.use(cors());
app.use(express.json());
app.listen(3000, () => {
console.log('Server running on port 3000');
});