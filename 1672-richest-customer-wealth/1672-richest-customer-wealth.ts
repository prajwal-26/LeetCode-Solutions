function maximumWealth(accounts: number[][]):number {
     let maxwealth:number = 0;
        for(let i = 0 ; i < accounts.length ; i++){
            let currentwealth:number = 0;
            for(let j = 0 ; j < accounts[i].length ; j++){
                currentwealth += accounts[i][j];
            }
           if(currentwealth > maxwealth){
               maxwealth = currentwealth;
           }
        }
    return maxwealth;
};