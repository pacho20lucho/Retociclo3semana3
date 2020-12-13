const router = require('express').Router();
const db = require('../../models');
const bcrypt = require('bcryptjs');
const usuarioController = require('../../controllers/UserController.js');


// Al momento que llegamos aqui la ruta raiz es .com/api/auth/

// .com/api/auth/
router.get('/', async(req,res) =>{
    const user = await db.user.findAll();
    res.status(200).json(user)
});

// .com/api/auth/signin/

router.post('/signin', usuarioController.signin);

// .com/api/auths/register/
router.post('/register', async(req,res) =>{
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    const user = await db.user.create(req.body);
    res.status(200).json(user)
});



// router.post('/signin', function(req, res){
//     usuarioController.signin
//   });

module.exports = router;