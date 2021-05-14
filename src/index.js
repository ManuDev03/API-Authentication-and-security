const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// blocking specific requests
app.use((req, res, next) => {
    console.log(req.method, req.path)

    if(req.method === 'GET')
    {
        res.send('GET request is blocked')
    }
    else 
    {
        next()
    }
    

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