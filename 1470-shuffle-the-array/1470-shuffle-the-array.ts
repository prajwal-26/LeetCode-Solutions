function shuffle(nums:number[], n:number):number[] {
    let items:number[] = new Array(nums.length);
    let index:number = 0 ;
    for(let i = 0; i < n; i++){
        items[index++] = nums[i];
        items[index++] = nums[i + n];
    } 
    return items
};