module.exports.nationToCode = function (nation) {
    var result;
    switch (nation) {
        case 'Trung Quốc':
            result = 'china';
            break;
        case 'Mỹ':
            result = 'america';
            break;
        case 'Nhật Bản':
            result = 'japan';
            break;
        case 'Hàn Quốc':
            result = 'south-korea';
            break;
        default:
            result = nation;
            break;
    }
    return result;
}

module.exports.codeToNation = function (code) {
    var result;
    switch (code) {
        case 'china':
            result = 'Trung Quốc';
            break;
        case 'america':
            result = 'Mỹ';
            break;
        case 'south-korea':
            result = 'Hàn Quốc';
            break;
        case 'japan':
            result = 'Nhật Bản';
            break;
        default:
            result = code;
            break;
    }
    return result;
}

module.exports.codeToStatus = function (code) {
    var result;
    if (code == 0 || code == '0') {
        result = 'Chưa giao hàng';
    } else if (code == 1 || code == '1') {
        result = 'Đang giao hàng';
    } else if (code == 2 || code == '2') {
        result = 'Đã giao hàng';
    }
    return result;
}