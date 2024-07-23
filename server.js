// // console.log('hello server');
// var os = require('os')
// // console.log(os.version());
// var  HTTP = require('http')
// const PORT = 7000
// // console.log(HTTP);

// const server =HTTP.createServer((req,res) =>{
//     res.setHeader('content','html')
//    if(req.url === '/login'){
//     res.end('<h2>This login route</h2>')
//    }
//    else if(req.url === '/'){
//     res.end('<h1>Server Home Page </h1>')
//    }


// })

// server.listen(PORT,()=>{
//     console.log(`server is now running on port : ${PORT}`);
// })



var express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const productRoute = require('./Routes/productRoutes')
const UserRoute = require('./Routes/userRoute')
const cors =require('cors')
const path = require('path')
const serverPath = path.resolve(__dirname,'server.js')
require(serverPath)
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser') 

app.get('/',(req,res) =>{
res.send('server home page')
})

// middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParser())
// app.use(bodyParser())
app.use(cors({origin:true}))
app.use('/uploads',express.static(path.join(__dirname,'uploads')))


app.use('/',productRoute)
app.use('/',UserRoute )






mongoose.connect(process.env.MONGO_URL)
.then(() =>{
    app.listen(8000,() =>{
        console.log('SERVER NOW LISTENING TO PORT 8000');
    })
}).catch((error) =>{
console.log(error);
})



