const express = require ("express");
const morgan = require ("morgan");
const cors = require ("cors");
//const path = require ("path");
const app = express();
const mongoose =require ("mongoose");

const url = "mongodb+srv://toor:root@cluster0.cdsch.mongodb.net/cluster0?retryWrites=true&w=majority";
const options = {useNewUrlParser:true, useUnifiedTopology:true};

mongoose.connect(url, options).then(() => {
    console.log("Database connected");
}).catch((error) => {
    console.log("Database could't be connected to: " + error);
});

module.exports = mongoose 


// MIDDLEWARE
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))



// ROUTES

app.use("/api", require("./routes/Newroute"));


const history = require("connect-history-api-fallback");
app.use(history());
//app.use(express.static(path.join(__dirname, "../../public")));



// Listen to port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Connected to port " + port);
});