// Example code from Lecture notes/
// create an array to store credentials
const users = [];

// function to enter username and password
function createUser(username,password){
    // push the new user object to the users array
    users.push({username,password});
    console.log(users);

}

// function to authenticate a user based on username and password
function auththenticateUser(username,password){
    //find the user by username in the array
    const user = users.find(user => user.username === username)
    
    //if the user is not found or if the password doesn't match returns false otherwise returns true
    if (!user || user.password !== password)
    {
        return false;
    }
    return true;
}
// Export the createUser and authenticate Users functions as a module
module.exports = {createUser, auththenticateUser};