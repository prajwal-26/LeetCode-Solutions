/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
     let maxwealth = 0;
        for(let i = 0 ; i < accounts.length ; i++){
            let currentwealth = 0;
            for(let j = 0 ; j < accounts[i].length ; j++){
                currentwealth += accounts[i][j];
            }
           if(currentwealth > maxwealth){
               maxwealth = currentwealth;
           }
        }
    return maxwealth;
};