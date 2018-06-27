var express = require('express');

var router = express.Router();

router.post('/', (req, res, next) => {
    req.session.isLogged = false;
    req.session.user = null;
    // req.session.cart = [];
    res.redirect(req.headers.referer);
});

module.exports = router;