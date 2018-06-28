var dateFormat = require('dateformat');

dateFormat.i18n = {
    dayNames: [
        'Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7',
        'Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'
    ],
    monthNames: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
    ],
    timeNames: [
        'AM', 'PM', 'AM', 'PM', 'AM', 'PM', 'AM', 'PM'
    ]
};

module.exports= function (date) {
    return dateFormat(date, 'dd-mmmm-yyyy HH:MM:s');
}