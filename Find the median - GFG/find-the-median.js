//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res=obj.find_median(arr);
        console.log(res);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
*/

// class Solution {

//     find_median(arr){
//         //sort the arr in desending order
//         arr.sort((a,b) => a - b)
//         //find the mid value of an array
//         const mid = Math.floor (arr.length / 2);
//         // if mid value is even sum of two mid numbers else return mid number
//         if(arr.length % 2 === 0){
//             return Math.floor((arr[mid - 1] + arr [mid]) / 2)
            
//         }
//         else{
//             return arr[mid]
//         }
        
        
//     }
// }
// const solution = new Solution
// const arr = [90 , 100,78,89,67]
// const final = solution.find_median(arr)
// console.log(arr.length)
// console.log(final)
class Solution {
    find_median(arr) {
        const len = arr.length;

        if (len % 2 === 1) {
            // If the array has an odd number of elements, find the middle element
            return this.quickSelect(arr, 0, len - 1, Math.floor(len / 2));
        } else {
            // If the array has an even number of elements, find the average of the two middle elements
            const left = this.quickSelect(arr, 0, len - 1, Math.floor(len / 2) - 1);
            const right = this.quickSelect(arr, 0, len - 1, Math.floor(len / 2));
            return Math.floor((left + right) / 2);
        }
    }

    quickSelect(arr, left, right, k) {
        while (left < right) {
            const pivotIndex = this.partition(arr, left, right);
            if (pivotIndex === k) {
                return arr[k];
            } else if (pivotIndex < k) {
                left = pivotIndex + 1;
            } else {
                right = pivotIndex - 1;
            }
        }
        return arr[k];
    }

    partition(arr, left, right) {
        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        const pivotValue = arr[pivotIndex];
        this.swap(arr, pivotIndex, right);
        let i = left;
        for (let j = left; j < right; j++) {
            if (arr[j] < pivotValue) {
                this.swap(arr, i, j);
                i++;
            }
        }
        this.swap(arr, i, right);
        return i;
    }

    swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

const solution = new Solution();
const arr = [90, 100, 78, 89, 67];
const final = solution.find_median(arr);
