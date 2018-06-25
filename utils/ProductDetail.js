var priceFormat = require('./priceFormat');
var switcher = require('./switchCode');

module.exports = function ProductDetail(product) {
    this.id = product.idsanpham;
    this.name = product.tensanpham;
    this.price = product.gia;
    this.price_f = priceFormat(product.gia);
    this.brand = product.nhasanxuat;
    this.nation = product.xuatxu;
    this.nation_f = switcher.codeToNation(product.xuatxu);
    this.type = product.loai;
    this.type_f = switcher.codeToType(product.loai);
    this.nviews = product.luotxem;
    this.nsold = product.luotban;
    this.detail = product.mota;
    this.img = product.img;
    this.date = product.ngaytiepnhan;
}