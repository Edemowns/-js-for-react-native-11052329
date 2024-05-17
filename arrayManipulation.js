
function processArray(arr) {
    return arr.map(num => {
        if(num % 2 === 0){return num*num;
        }else{return num * 3;
        }
    });
}

// testing code
const inputArray = [4, 7, 3, 4, 5,6,7,8,9];
const processedArray = processArray(inputArray);
console.log(processedArray); 

function formatArrayStrings(stringArray, numberArray){
    return stringArray.map((str, index) => {
        if (numberArray[index]% 2 === 0){
            return str.toUpperCase();
        }else {
            return str.toLowerCase();
    
        }
    });


    }

    
module.exports = { processArray, formatArrayStrings };
