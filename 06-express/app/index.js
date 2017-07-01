const {host,port} = require("./config.js")
const express=require('express')
const bodyParser = require('body-parser')

//setup
const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

//Subscriber API

app.use('/api/subscribers',require('./subscriberApi'))

//publish html5 app

// app.get('/',(request,response)=>{
//     let subscriber = [
//         {
//         "name":"Renann Ponte",
//         "email":"renann.ponte@inatel.br"
//     },{
//         "name":"Renann Ponte",
//         "email":"renann.ponte@inatel.br"
//     }
//     ]
//     // response.send("Hi there")
//     response.json(subscriber)
// })

app.get('/about',(request,response)=>{

    response.send("This is an express application")

})

//server startup

app.listen(port,()=>{
    console.log(`Server started at http://${host}:${port}`)
})
