// CƠ SỞ DỮ LIỆU DÙNG TIẾNG VIỆT:
      // sanpham: idsanpham, gia, loai, luotxem, luotban, mota, xuatxu, nhasanxuat, img, tensanpham, ngaytiepnhan
      // taikhoan: email, matkhau, hoten, sdt, admin

// Khai báo các module cần sử dụng
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var handleLayout = require('./middlewares/handleLayout');

// Khai báo các Controller
var indexRouter = require('./routes/index'),
    signinRouter = require('./routes/signin'),
    signupRouter = require('./routes/signup'),
    productRouter = require('./routes/product'),
    searchRouter = require('./routes/search');

var app = express();

// Cài đặt view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Cài đặt các middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(handleLayout);

// Chuyển tiếp cho các Controller xử lý
app.use('/', indexRouter);
app.get('/home', function(req, res) {
  res.redirect('/');
})
app.use('/signin', signinRouter);
app.use('/signup', signupRouter);
app.use('/product', productRouter);
app.use('/search', searchRouter);

// Bắt lỗi
app.use(function(req, res, next) {
  next(createError(404));
});

// Xử lý lỗi
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
