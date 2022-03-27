const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auths");
const postRoute = require("./routes/posts");

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=>{
    console.log("Connected to MongoDB")
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/post", postRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.listen(8800, ()=>{
    console.log("Backend server is running!")
});