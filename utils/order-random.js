module.exports = function() {
    var str = 'o';
    str += Math.floor((Math.random() * 9) + 1);
    str += Math.floor((Math.random() * 9) + 1);
    str += Math.floor((Math.random() * 9) + 1);
    str += Math.floor((Math.random() * 9) + 1);
    return str;
}