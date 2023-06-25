const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/ToDoRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.port || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.use(routes);
app.listen(PORT, () => {
    console.log("Listening on port 3000")
})