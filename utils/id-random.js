module.exports = function() {
    var str = 'c';
    str += Math.floor((Math.random() * 9) + 1);
    str += Math.floor((Math.random() * 9) + 1);
    str += Math.floor((Math.random() * 9) + 1);
    str += Math.floor((Math.random() * 9) + 1);
    return str;
}