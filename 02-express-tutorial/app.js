import express from "express";
import {people} from './data.js'
import path from 'path'

const staticDIr = new URL('./methods-public', import.meta.url).pathname

const app = express(); 

// static assets
app.use(express.static((staticDIr)))

app.get('/api/people', (req, res) =>{
  res.status(200).json({success: true, people: people})
})

app.listen(3000, () => console.log("Server is running on port 3000..."));
