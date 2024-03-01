// dotenv should import at top
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import web from './routes/web.js'
import cors from 'cors'
import connectDB from './db/connectdb.js';
// import bodyparser from 'body-parser'
const app = express(); // Create an Express application
const port = process.env.PORT 
const DATABASE_URL = process.env.DATABASE_URL


// connecting mongodb 
connectDB(DATABASE_URL)


// app.use(bodyparser.json())

// Middleware to parse JSON in the request body
app.use(express.json()) //for parsing application/json  // to accept JSON data

//while creating Doc. when we do console.log(req.body) it print undefined, to solve this we use urlencoded
//extended: false means value can be string or array
//extended: true means value can be any type
//The express urlencoded() function is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser
app.use(express.urlencoded({extended:false})) //it will help to parse our form data


// load the routes
app.use('/', web)

// Use cors middleware for all routes
app.use(cors());


// to serve static files 
app.use(express.static('public'))

// set template engine 
app.set('view engine', 'ejs')


// Start the server
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})



