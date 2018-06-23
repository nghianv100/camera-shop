var productDAO = require('../database/productDAO');

module.exports = function (req, res, next) {
    productDAO.loadTypes().then(rowsTypes => {
        productDAO.loadBrands().then(rowsBrands => {
            var typesList = [];
            var brandsList = [];

            for (var i = 0; i < rowsTypes.length; i++) {
                switch (rowsTypes[i].loai) {
                    case '360degree':
                        typesList[i] = '360 độ';
                        break;
                    case 'compact':
                        typesList[i] = 'Compact';
                        break;
                    case 'dslr':
                        typesList[i] = 'DSLR';
                        break;
                    case 'mirrorless':
                        typesList[i] = 'Mirrorless';
                        break;
                }
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