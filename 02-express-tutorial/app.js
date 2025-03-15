import express from "express";
import {people} from './data.js'

const app = express(); 

app.get('/api/people', (req, res) =>{
  res.status(200).json({success: true, people: people})
})

app.listen(3000, () => console.log("Server is running on port 3000..."));
