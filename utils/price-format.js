module.exports = function (input) {
    var strInput = '' + input;
    var result = '';
    var sub;
    var inputLength = strInput.length;
    while (inputLength > 3) {
        sub = '.' + strInput.slice(inputLength - 3, inputLength);
        inputLength = inputLength - 3;
        result = sub.concat(result);
    }
    sub = strInput.slice(0, inputLength);
    result = sub.concat(result);
    return result;
}