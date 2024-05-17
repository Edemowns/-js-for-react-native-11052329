

const { processArray, formatArrayStrings } = require('./arrayManipulation');
const { createUserProfiles } = require('./userInfo');


const numberArray = [4, 7, 3, 4, 5,6,7,8,9];
const stringArray = ["Houses", "War", "JavaScript", "is", "awesome", "fish","Cook","Larry"];

const processedNumbers = processArray(numberArray);
console.log('Processed Numbers:', processedNumbers);


const formattedStrings = formatArrayStrings(stringArray, processedNumbers);
console.log('Formatted Strings:', formattedStrings);

const userProfiles = createUserProfiles(stringArray, formattedStrings);
console.log('User Profiles:', userProfiles);

userProfiles.forEach(profile => {
    console.log(`ID: ${profile.id}, Original Name: ${profile.originalName}, Modified Name: ${profile.modifiedName}`);
});
