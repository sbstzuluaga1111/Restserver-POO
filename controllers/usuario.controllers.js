const getUsers = (req, res)=>{
    res.json({
        "message": "home page"
    })
}

const postUsers = (req, res)=>{

        res.json({
            "message": "delete api"
        })
    }

module.exports = {
    getUsers,
    postUsers
}