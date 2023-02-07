let { posts } = require('../../DB/postArr.js');

const getposts = ((req, res) => {
    res.json({ message: 'posts get successfully', data: posts });
});

const addposts = ((req, res) => {
    const { id, name, email } = req.body;
    let result = posts.find(user => user.id === id);
    if (result) {
        res.json({ message: 'User already exists' });
    } else {
        posts.push(req.body);
        res.json({ message: 'User added successfully', data: posts });
    }
});

const sortedposts = ((req, res) => {
    const { id, name, email } = req.body;
    let result = posts.sort((a, b) => a.name.localeCompare(b.name));
    if (result) {
        res.json({ message: 'posts sorted successfully', data: posts });
    } else {
        res.json({ message: 'posts not found' });
    }
});

const deleteposts = ((req, res) => {
    const { id, name, email } = req.body;
    let result = posts.filter(user => user.id !== id);
    if (result) {
        posts = result;
        res.json({ message: 'User deleted successfully', data: posts });
    } else {
        res.json({ message: 'User not found' });
    }
});


const updateposts = ((req, res) => {

    const { id, name, email } = req.body;
    let result = posts.find(user => user.id === id);
    if (result) {
        result.name = name;
        result.email = email;
        res.json({ message: 'User updated successfully', data: posts });
    } else {
        res.json({ message: 'User not found' });
    }
});

const searchposts = ((req, res) => {
    const { id, name, email } = req.body;
    let result = posts.find(user => user.id === id);
    if (result) {
        res.json({ message: 'User found', data: result });
    } else {
        res.json({ message: 'User not found' });
    }
});

module.exports = {
    getposts,
    addposts,
    sortedposts,
    deleteposts,
    updateposts,
    searchposts
};