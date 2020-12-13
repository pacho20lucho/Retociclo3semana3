// llamamos al router de express
const router = require('express').Router();

const apiAuthRouter = require('./api/auths.js')

router.use('/auth', apiAuthRouter);


module.exports = router;

