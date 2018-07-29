

module.exports={
    getInvintory: (req, res) =>{
        let db = req.app.get('db');
        db.getInvintory().then(response => {
        res.status(200).send(response)
    })
},
addInvintory: (req,res) =>{
    let db= req.app.get('db');
    let { name, price, image_url } = req.body
    db.createInvintory([ id,
        name,
        price, 
        image_url,]).the(response => {
            res.send(response)
        })
       
},
updateInvintory: (req,res) =>{
    let db= req.app.get('db');
    let {id} = req.params
    let {name, price, image_url}= req.body
    db.updateInvintory([name, price, image_url, id]).then(response => {
        res.send(response)
       
        })
},
deleteInvintory: (req,res) =>{
    let db= req.app.get('db');
    let {id}= req.params
    db.removeInvintory(id).then(response =>{
        res.send(response)
    }
        
    
    )
}

}