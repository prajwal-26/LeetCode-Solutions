/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const numbertostring = n.toString();
    
    let product = 1;
    let sum = 0;
    
    for(let i = 0 ; i < numbertostring.length; i++){
        const digit = parseInt(numbertostring[i])
        product *= digit
        sum += digit
        
    }
    
    return product - sum;
};

