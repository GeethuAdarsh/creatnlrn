//Testing numbers
module.exports.absolute = function(number){
    return (number >= 0) ? number : -number;
}

//Testing strings
module.exports.greet = function(name){
    return 'Welcome' + name + '!';
}

//Testing Arrays
module.exports.getCurrencies = function(){
    return ['INR','EUR','USD'];
}

//Testing Objects
module.exports.getProduct = function(productId){
    return {id : 1,price:10,category:'a'}
}

//Testing Exceptions
module.exports.registerUser = function(username){
    if (!username) throw new Error('Username is required');
    return {id:new Date().getTime() , username : username}
}