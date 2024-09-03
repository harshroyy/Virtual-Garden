const express = require("express");
const app = express();
require('dotenv').config();
require('./conn/conn'); // Ensure this path is correct
const cors = require("cors");

// Import Routes
const Herb = require("./routes/herb");
const Chatbot = require("./routes/chatbot"); // Import the chatbot routes

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1", Herb);
app.use("/api/v1", Chatbot); // Use the chatbot routes

// Listening to port 
app.listen(process.env.PORT, () => {
    console.log(`Server Listening on port ${process.env.PORT}`);
});
