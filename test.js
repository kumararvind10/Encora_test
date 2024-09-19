// Given an integer array – [6,13,22,18,0,3,45,57,5,12]
// Write a function that finds the second largest integer

let arr = [6,13,22,18,0,3,45,57,5,12]
function findTheSecondLargestElement(arr){
    let max = 0 // initialize max and second max with 0
    let secondMax = 0;
    
    for(let i =0; i< arr.length; i++){ 
        if(arr[i] > max){ // if current element is greater than max then update secondMax to old max and max to the current element
            secondMax = max 
            max =  arr[i]
        }else if(arr[i] > secondMax && arr[i] < max){ // if the current element is not greater than max but greater than secondMax and less than max then update second max to current element
            secondMax = arr[i]
        }
    }
    return secondMax // return the secondmax from array
}

console.log(findTheSecondLargestElement(arr))
