
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/user', userRouter);


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Start The Server
app.listen(port, () => {
    console.log(`Server Satrting on ${port}`);
});

