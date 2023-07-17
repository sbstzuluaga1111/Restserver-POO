const {Router} = require('express');
const {getUsers, postUsers, deleteUsers, putUsers, patchUsers} = require('../controllers/usuario.controllers.js');

const router =  Router();

router.get("/", getUsers);
router.delete("/", deleteUsers);
router.put("/", putUsers);
router.post("/", postUsers);
router.patch("/", patchUsers);

module.exports = router;