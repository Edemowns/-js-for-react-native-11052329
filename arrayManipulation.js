
function processArray(arr) {
    return arr.map(num => {
        if(num % 2 === 0){return num*num;
        }else{return num * 3;
        }
    });
}

// testing code
const inputArray = [1, 2, 3, 4, 5,6,7,8];
const processedArray = processArray(inputArray);
console.log(processedArray); 
