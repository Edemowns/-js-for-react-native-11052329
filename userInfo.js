function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error('The length of originalNames and modifiedNames arrays must be the same.');
    }

    return originalNames.map((originalName, index) => {
        return {
            id: index + 1,
            originalName: originalName,
            modifiedName: modifiedNames[index]
        };
    });
}



 module.exports = { createUserProfiles };