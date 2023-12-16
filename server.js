const express = require("express")
const app = express();
const port = process.env.PORT||5000
const {db} = require("./db/config")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config();

const ProductRoute = require("./routes/productRoutes")
const userRoute = require("./routes/userRoutes")

var corsOption={
    origin:"http://localhost:3000"
}

//middleware
app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Routes
app.use("/api/user",userRoute)
app.use("/api/product",ProductRoute);

const server=()=>{
    db()
    app.listen(port,()=>{
        console.log(`Node js server started on port ${port}`);
    })
    app.on("error",console.error.bind(console,"MongoDb connection error"))
}

server()