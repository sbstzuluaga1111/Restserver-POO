const {Router} = require('express');
const {getUsers, postUsers} = require('../controllers/usuario.controllers.js');
const router =  Router();

this.get("/", getUsers);

this.app.delete("/", );


this.app.put("/", (req, res)=>{
    res.json({
        "message": "put page"
    })
});
this.app.post("/", (req, res)=>{
    res.json({
        "message": "Post api"
    })
});
this.app.path("/", (req, res)=>{
    res.json({
        "message": "patch page"
    })
});

module.exports = router;