const express = require('express')
const router = express.Router()

let db = [
    
        {id: 1, name:"Edy Segura",email:"edysegura@gmail.com"},
        {id: 2, name:"Ded Segura",email:"dedysegura@gmail.com"},
        {id: 3, name:"Ted Segura",email:"tedysegura@gmail.com"},
        {id: 4, name:"Ped Segura",email:"pedysegura@gmail.com"},
        
    
]

router.get('/',(request, response)=>{
    response.json(db)
})
router.get('/:id',(request, response)=>{
    let subscriber = db.find(sub => sub.id == request.params.id)
    if(subscriber){
        response.json(subscriber)
    }else{
        response.status(404).send("Not found!")
    }
    response.json(db)
})
router.post(`/`,()=>(request, response)) =>{
    let newSubscriber = {
        id: db.length+1,
        name: request.body.name,
        email: request.body.email
    }
    
}
module.exports = router