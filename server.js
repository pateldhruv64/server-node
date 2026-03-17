console.log('hello');

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import  db  from "./db.js";


const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello babyy');
});

db();

const port = 3000;

app.listen(port, () => console.log(`server is start http://localhost:${port}`));
