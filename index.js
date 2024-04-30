import React from 'react';
import express from 'express';
import cors from 'cors';
import BookDocument from './book-document';
import { renderToBuffer } from '@react-pdf/renderer';

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Server is Ready!');
});

app.get('/pdf', (req, res) => {
  const buffer = renderToBuffer(<BookDocument />);
  console.log(buffer);
});
