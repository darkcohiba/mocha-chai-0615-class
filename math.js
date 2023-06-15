var validator = require('validator');


console.log(validator.isEmail('foo@bar.com'))


function addition(num1, num2){
    return num1 + num2;
}

const modulo = (num1, num2) => num1 % num2;


module.exports = {
    addition,
    modulo
}