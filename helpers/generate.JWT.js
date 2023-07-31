const jwt = require ('jsonwebtoken');

const generateJWT = (udi = '') =>{

    return new Promise ((resolve, reject)=>{

        const payload = {uid};

        jwt.sign(payload,process.env.SECRET_OR_PRIVATE_KEY,{
            expiresIn : '4h'
        }, (error, token)=>{
            if (err){
                console.log(err)
                reject ('No se pudo generar el JSON WEB TOKEN')
            }else{
                resolve(token)
            }
        })
    })
}

module.export = {
    generateJWT
}