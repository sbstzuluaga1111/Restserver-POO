const {response} = require('express');
const Usuario = require('../models/Usuario.js');
const bcryptjs = require('bcryptjs');
const {generateJWT} = require ('../helpers/generate.JWT.js');

const login = async (req, res=response) => {
    const {email, password} = req.body;
    try {
        
        const emailExiste = await Usuario.findOne({email});

        if(!emailExiste){
            return res.status(404).json({
                msg: 'Email inexistente'
            })
        }

        if(emailExiste.estado === false){
            return res.status(404).json({
                msg: 'El usuario no esta activo'
            })
        }

        const passwordValido = bcryptjs.compareSync(password, emailExiste.password);

        if(passwordValido){
            return res.status(404).json({
                msg: 'Contraseña invalida'
            })
        }

        const token = await generateJWT(usuario.id)

    res.json({
        usuario,
        token
    })    

    } catch (error) {
        console.log(error);
        return res.json({
            msg: "Datos induficientes. error"
        })
    }
};

module.exports = {
    login
}