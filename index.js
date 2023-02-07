const express = require('express');
const app = express();
app.use(express.json());// to convert buffed data to json

const users = require('./Modules/Users/users.routes');
const posts = require('./Modules/Post/post.routes');
app.use(users);
app.use(posts);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
