const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected 🎉`.red.italic.bgYellow);
    } catch (error) {
        console.log(`MongoDB connection failed. Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;