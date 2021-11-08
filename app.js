const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
// const bodyParser = require("body-parser")
var bodyParser = require('body-parser')

const expressValidator = require("express-validator");
const dotenv = require("dotenv");
const postRoutes = require("./routes/routes.js");

dotenv.config();
const app = express();


//db connection
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true})
    .then(() => console.log('DB Connected'))   
mongoose.connection.on('error', err => {
console.log(`DB connection error: ${err.message}`)
});

// const mymiddleWare = (req,res,next) => {
//     console.log("middleware created");
//     next();
// }
// app.get("/", postRoutes);
// app.use(mymiddleWare)
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

app.use(morgan("dev"));
app.use(expressValidator());
app.use("/", postRoutes);

app.use(express.urlencoded({ extended: true }));


const port = 8080
app.listen(port, () => console.log(`node js api is listining on port :${port}`))