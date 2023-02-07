
/*using Express and divide your project files
Create two arrays (user array, post array)

User end points
1- GetAllUsers
2- AddUser
3- Get all users sorted alphabetically by name 
4- delete user
5- update user
6- search  user by id

Post end points
1- GetAllPosts
2- AddPost
3- Get all Posts reversed (but don't change the order of the main array)
4- delete post
5- update post
6- search  post by id
*/


let {users}=require('../../DB/userArr.js');

const getusers = ((req, res) => { 
    res.json({ message: 'Users get successfully', data: users });
});

const addusers = ((req, res) => {   
    const { id, name, email } = req.body;
    let result = users.find(user => user.id === id);
    if (result) {
        res.json({ message: 'User already exists' });
    } else {
        users.push(req.body);
        res.json({ message: 'User added successfully', data: users });
    }
});

const sortedusers = ((req, res) => {
    const { id, name, email  } = req.body;
    let result = users.sort((a, b) => a.name.localeCompare(b.name));
    if (result) {
        res.json({ message: 'Users sorted successfully', data: users });
    } else {
        res.json({ message: 'Users not found' });
    }
});

const deleteusers = ((req, res) => {
    const { id, name, email  } = req.body;
    let result = users.filter(user => user.id !== id);
    if (result) {
        users = result;
        res.json({ message: 'User deleted successfully', data: users });
    } else {
        res.json({ message: 'User not found' });
    }
});


const updateusers = ((req, res) => {

    const { id, name, email  } = req.body;
    let result = users.find(user => user.id === id);
    if (result) {
        result.name = name;
        result.email = email;
        res.json({ message: 'User updated successfully', data: users });
    } else {
        res.json({ message: 'User not found' });
    }
});
 
const searchusers = ((req, res) => {
    const { id, name, email  } = req.body;
    let result = users.find(user => user.id === id);
    if (result) {
        res.json({ message: 'User found', data: result });
    } else {
        res.json({ message: 'User not found' });
    }
});

module.exports = {
    getusers,
    addusers,
    sortedusers,
    deleteusers,
    updateusers,
    searchusers
};