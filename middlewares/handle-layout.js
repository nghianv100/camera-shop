var productDAO = require('../database/productDAO');
var switcher = require('../utils/switch-code')

module.exports = function (req, res, next) {
    productDAO.loadTypes().then(rowsTypes => {
        productDAO.loadBrands().then(rowsBrands => {
            for (var i = 0; i < rowsTypes.length; i++) {
                rowsTypes[i].loai_f = switcher.codeToType(rowsTypes[i].loai);
            }
            for (var j = 0; j < rowsBrands.length; j++) {
                rowsBrands[j].nhasanxuat_f = rowsBrands[j].nhasanxuat;
            }
            res.locals.layoutVM = {
                typesList: rowsTypes,
                brandsList: rowsBrands,
                isLogged: req.session.isLogged,
                user: req.session.user
            }
            next();
        });
    });
}