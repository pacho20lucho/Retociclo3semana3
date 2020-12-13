const config =require('../secret/config.js');
const models = require ( '../models' );
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



exports.signin = async function (req, res, next) {
    try {
        const user = await models.user.findOne({ where: {email: req.body.email} });
        if (user) {
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) {

                const token = jwt.sign({
                    id: user.id,
                    name: user.name,
                    email: user.email
                }, config.secret, { expiresIn: 86400 });

                res.status(200).send({ 
                    auth: true, 
                    accessToken: token, 
                    user:user });

            } else {
                // res.status(401).json({
                //     error: 'Error en la validación'
                // })
                res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
            }
        } else {

            res.status(404).send('User Not Found.');
            // res.status(404);
        }
    } catch (error) {
        res.status(500);
        
        next(error);
    }

};
    
    // module.exports = {
    //     'secret': 'key-super-secret',
    // };