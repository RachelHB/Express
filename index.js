
// const express = require('express')
// const app = express()
// const port = 3001
// const router = require('./router')
// const mongoose = require('mongoose')

// // http method, pathway, handler, 
// // app.get('/test', (req, res) => res.send('Hello test!'))
// // app.get('/', (req, res) => res.send('Hello Express!'))

// app.use(express.json());
// app.use(router)

// //make sure you specify which database in mongo you want the data to go to.
// mongoose.connect("mongodb+srv://RBennett:pw5489@cluster0.qkqez51.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
// //send to local port
// app.listen(port, () =>
// console.log(`Example app listening at http://localhost:${port}`))


//setup up mongoose connection
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', function callback() {
//     console.log("Database connected")
// })

const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const router = require('./router')

app.use(express.json());
app.use(router)
app.listen(port, () =>
console.log(`Example app listening at http://localhost:${port}`))