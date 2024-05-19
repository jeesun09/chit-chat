const express = require('express')
const dotenv = require('dotenv')
const cors = require("cors");
const chats = require("./data/data.js");
const connectDB = require('./config/db.js');
const colors = require('colors');
dotenv.config()
//mongodb connection
connectDB();

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());

app.get('/', (req, res) =>{
    res.send("Hello world, Chat API is running...")
})

app.get('/api/chat', (req, res) => {
  res.send(chats);
})

app.listen(PORT, () => {
  console.log(`Server is Running 🏃`.red.bold)
})

