const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/hierarchyRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});