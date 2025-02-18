const express = require('express')
const loginRouter = require('./router/LoginRouter')
const signupRouter = require('./router/SignUpRouter')
const JobRouter = require('./router/Jobs')
const cors = require('cors')
const emailRouter = require('./router/EmailRouter')


const app = express()
app.use(cors())
require('./connection/connection')

app.use(express.json())

app.get("/" , (req,res)=>{
    res.send("Let's start creating the server")
})

app.use('/admin/login', loginRouter);
app.use('/admin/signup', signupRouter);
app.use('/',JobRouter)
app.use('/',emailRouter)

app.listen(5000, '0.0.0.0' ,()=>{
console.log('Server connected at Port : 5000')
})



