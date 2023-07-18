const Usuario = require('../models/Usuario.js');
const bcryptjs = require('bcryptjs');



const getUsers = (req, res)=>{
    res.json({
        "message": "get api"
    })
}

const postUsers = async (req, res)=>{



        const {nombre, email, password, rol} = req.body;
        const usuario = new Usuario({nombre, email, password, rol});

        const existeEmail = await Usuario.findOne({email});
        if(existeEmail){
            return res.status(400).json({
                msg: "Email is alredy registered"
            })
        }

        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);

        await usuario.save();
        res.json({
            "message": "post api",
            usuario
        })
    }

const deleteUsers = (req, res)=>{
    res.json({ 
        "message": "delete api"
})
}

const putUsers = (req, res)=>{
        res.json({
            "message": "put page"
        })
    }

    const patchUsers = (req, res)=>{
        res.json({
            "message": "patch page"
        })
    }

module.exports = {
    getUsers,
    postUsers,
    deleteUsers,
    putUsers,
    patchUsers,
}