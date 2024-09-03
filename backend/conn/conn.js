const mongoose = require("mongoose");

const conn = async () => {
    try {
        await mongoose.connect(`${process.env.URI}`, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

conn();
