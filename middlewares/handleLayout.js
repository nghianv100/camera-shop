var productDAO = require('../database/productDAO');
var switcher = require('../utils/switchCode')

module.exports = function (req, res, next) {
    productDAO.loadTypes().then(rowsTypes => {
        productDAO.loadBrands().then(rowsBrands => {
            var typesList = [];
            var brandsList = [];

            for (var i = 0; i < rowsTypes.length; i++) {
                typesList[i] = switcher.codeToType(rowsTypes[i].loai);
            }

            for (var i = 0; i < rowsBrands.length; i++) {
                brandsList[i] = rowsBrands[i].nhasanxuat;
            }

            res.locals.layoutVM = {
                types: typesList,
                brands: brandsList
            }

            next();
        });
    });
}