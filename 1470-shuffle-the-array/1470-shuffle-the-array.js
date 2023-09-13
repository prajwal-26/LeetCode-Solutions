/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let items = new Array(nums.length);
    let index = 0 ;
    for(let i = 0; i < n; i++){
        items[index++] = nums[i];
        items[index++] = nums[i + n];
    } 
    return items
};