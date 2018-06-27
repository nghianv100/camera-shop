// Khai báo các module cần sử dụng
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var session = require('express-session');

var restrict = require('./middlewares/restrict');
var database = require('./database/db');
var handleLayout = require('./middlewares/handle-layout');

// Khai báo các Controller
var indexRouter = require('./routes/index'),
  signinRouter = require('./routes/signin'),
  signupRouter = require('./routes/signup'),
  signoutRouter = require('./routes/signout'),
  productRouter = require('./routes/product'),
  searchRouter = require('./routes/search'),
  contactRouter = require('./routes/contact'),
  accountRouter = require('./routes/account'),
  adminRouter = require('./routes/admin'),
  cartRouter = require('./routes/cart'),
  maproductsRouter = require('./routes/maproducts'),
  maordersRouter = require('./routes/maorders'),
  matypesRouter = require('./routes/matypes'),
  mabrandsRouter = require('./routes/mabrands');

var app = express();

// Sessions manager
app.use(session({
  key: 'session_cookie_name',
  secret: 'PTUDW2015',
  store: database.sessions.getSessionStore(),
  resave: false,
  saveUninitialized: false
}));

// Cài đặt view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Cài đặt các middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(handleLayout);

// Chuyển tiếp cho các Controller xử lý
app.use('/', indexRouter);
app.get('/home', function (req, res) {
  res.redirect('/');
})
app.use('/signin', signinRouter);
app.use('/signup', signupRouter);
app.use('/signout', signoutRouter);
app.use('/product', productRouter);
app.use('/search', searchRouter);
app.use('/contact', contactRouter);
app.use('/account', restrict, accountRouter);
app.use('/cart', restrict, cartRouter);
app.use('/admin', adminRouter);
app.use('/admin/quanlysanpham', maproductsRouter);
app.use('/admin/quanlyloai',matypesRouter );
app.use('/admin/quanlynhasx', mabrandsRouter );
app.use('/admin/quanlydonhang',maordersRouter );

// Bắt lỗi
app.use(function (req, res, next) {
  next(createError(404));
});

// Xử lý lỗi
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;