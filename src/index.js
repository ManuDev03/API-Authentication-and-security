const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
   

// })

// middleware for maintains mode 
// 1. register a new middleware function
// 2. send back a maintance message with 503 status code
// 3. try your request from server and confirm status 

app.use((req, res, next) => {
    res.status(503).send('Site is currently down check back soon!')
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// without middleware: new request --> run route handler
// with middleware: new request --> do something --> run route handler

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({_id:'abc123'},'thisistoken',{expiresIn: '7 days'})
    console.log(token);

    const data = jwt.verify(token, 'thisistoken')
    console.log(data);
    
}

myFunction()