// userInfo.js

// Function to create user profiles
function createUserProfiles(namesArr, modifiedNamesArr) {
    let id = 1; // Auto-incrementing ID starting from 1
    return namesArr.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNamesArr[index],
            id: id++
        };
    });
}

// Function to get user info by ID
function getUserInfo(id) {
    const users = createUserProfiles(
        ['John', 'Jane', 'Doe'],
        ['JOHN', 'jane', 'doe']
    );
    return users.find(user => user.id === id);
}

module.exports = {
    createUserProfiles,
    getUserInfo
};

