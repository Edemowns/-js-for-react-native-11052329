StudentID : 11052329
This project consists of a set of JavaScript functions to manipulate arrays of numbers and strings, and to create user profiles based on these arrays. The main files are `arrayManipulation.js` and `userInfo.js`.
I created an additional file; `test.js` which i use to test my codes and demonstrate their usage.

### arrayManipulation.js

1. **processArray** function

    - **Description**: This function takes an array of numbers and returns a new array where each even number is squared and each odd number is tripled.
    - **Parameters**: 
      - `arr` (number[]): An array of numbers to be processed.
    - **Returns**: 
      - `number[]`: A new array with each even number squared and each odd number tripled.

      
2. **formatArrayStrings**

    - **Description**: This function takes two arrays, one of type strings and one of numbers , and modifies each string based on its corresponding number: capitalizes the entire string if the number is even, and converts the string to lowercase if the number is odd.
    - **Parameters**:
      - `stringArray` (string[]): An array of strings to be formatted.
      - `numberArray` (number[]): An array of numbers processed by `processArray`.
    - **Returns**:
      - `string[]`: A new array of formatted strings.

      ### userInfo.js

1. **createUserProfiles**

    - **Description**: This function takes an array of original names and an array of modified names, and returns an array of objects, each containing `originalName`, `modifiedName`, and `id` (auto-incremented starting from 1).
    - **Parameters**:
      - `originalNames` (string[]): An array of original names.
      - `modifiedNames` (string[]): An array of modified names from `formatArrayStrings`.
    - **Returns**:
      - `Object[]`: An array of user profile objects.
    
    ## Prerequisites

- Node.js installed on your machine.

## How to Use

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies** (if any):
    ```sh
    npm install
    ```

3. **Run the example**:
    ```sh
    node arrayManipulation.js
    node userInfo.js
    ```

4. **Use the functions in your own code**:
    ```javascript
    const { processArray, formatArrayStrings } = require('./arrayManipulation');
    const createUserProfiles = require('./userInfo');

    const inputArray = [1, 2, 3, 4, 5];
    const processedArray = processArray(inputArray);

    const stringArray = ["Hello", "World", "JavaScript", "is", "awesome"];
    const formattedStrings = formatArrayStrings(stringArray, processedArray);

    const originalNames = ["Alice", "Bob", "Charlie", "Diana", "Edward"];
    const userProfiles = createUserProfiles(originalNames, formattedStrings);

    console.log(userProfiles);
    ```

##