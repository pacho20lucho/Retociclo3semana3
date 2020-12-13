// llamamos al router de express
// creado luis
const router = require('express').Router();

const apiAuthRouter = require('./api/auths.js')

router.use('/auth', apiAuthRouter);


module.exports = router;

