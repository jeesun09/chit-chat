const express = require('express')
const dotenv = require('dotenv')
const cors = require("cors");
const chats = require("./data/data.js");
const connectDB = require('./config/db.js');
const userRoutes = require("./routes/user.route.js");
const colors = require('colors');
dotenv.config()
//mongodb connection
connectDB();
const app = express();
app.use(express.json());//to accept json data

const PORT = process.env.PORT || 3000

app.use(cors());

app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is Running 🏃`.red.bold)
})

