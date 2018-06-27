module.exports = function(req, res, next) {
    if(req.session.isLogged === true) {
        next();
    } else {
        res.redirect('/');
        // res.redirect(`/signin?retUrl=${req.originalUrl}`);
    }
}