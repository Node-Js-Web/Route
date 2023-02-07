/*Assignment 2:

using HTTP REQUEST *
* Create two arrays(user array, post array)

User end points
1 - GetAllUsers
2 - AddUser
3 - Get all users sorted alphabetically by name
4 - delete user
5 - update user
6 - search  user by id

Post end points
1 - GetAllPosts
2 - AddPost
3 - Get all Posts reversed(but don't change the order of the main array)
4 - delete post
5 - update post
6 - search  post by id
*/



const http = require('http');

let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'ali' }

];
http.createServer((req, res) => {
    const { url, method } = req;
    let bufferedData;
    if (url === '/' && method === 'GET') {
        res.write(JSON.stringify(users));
        res.end();
    }

    //GetAllUsers
    if (url === '/users' && method === 'GET') {
        req.on('data', (data) => {
            bufferedData = data;
        });
        req.on('end', () => {
            const parsedData = JSON.parse(bufferedData);
            if (parsedData) {
                res.write(JSON.stringify(parsedData));
                res.end();
            } else {
                res.write("No data found");
                res.end();
            }

        });
    }
    //AddUser
    else if (url === '/addusers' && method === 'GET') {
        let bufferedData;
        req.on('data', (data) => {
            bufferedData = data;
        });
        req.on('end', () => {
            const parsedData = JSON.parse(bufferedData);
            let result = users.find((user) => user.id === parsedData.id);
            if (result) {
                res.write("User already exist");
                res.end();
            } else {
                users.push(parsedData);
                const myJson = JSON.stringify(users);
                res.write(myJson);
                res.end();
            }
        });
    }
    //Get all users sorted alphabetically by name
    else if (url === '/sortusers' && method === 'GET') {
        let bufferedData;
        req.on('data', (data) => {
            bufferedData = data;
        });
        req.on('end', () => {
            const parsedData = JSON.parse(bufferedData);
            users.push(parsedData);
            let result = users.sort((a, b) => a.name.localeCompare(b.name));
            if (result) {
                res.write(JSON.stringify(result));
                res.end();
            } else {
                res.write("No data found");
                res.end();
            }
        });
    }
    //delete user
    else if (url === '/deleteusers' && method === 'DELETE') {
        let bufferedData;
        req.on('data', (data) => {
            bufferedData = data;
        });
        req.on('end', () => {
            const parsedData = JSON.parse(bufferedData);
            users = users.filter(user => user.id !== parsedData.id);
            res.write(JSON.stringify(users));
            res.end();
        });
    }
    // update user
    else if (url === '/updateusers' && method === 'PUT') {
        let bufferedData;
        req.on('data', (data) => {
            bufferedData = data;

        });
        req.on('end', () => {
            const parsedData = JSON.parse(bufferedData);
            let result = users.find((user) => { return user.id === parsedData.id });
            users[result.id - 1].name = parsedData.name;
            console.log(users);
            res.write(JSON.stringify(users));
            res.end();

        });
    }

    //search user by id
    else if (url === '/searchusers' && method === 'GET') {
        let bufferedData;
        req.on('data', (data) => {
            bufferedData = data;
        });
        req.on('end', () => {
            const parsedData = JSON.parse(bufferedData);
            let result = users.find((user) => user.id === parsedData.id);
            users.forEach(ele => {
                if  (ele.id === parsedData.id) {
                    res.write(JSON.stringify(ele.name));
                    res.end();
                }
            });
        });
    }
    //***************************************************************************************************************************
    //GetAllPosts
    else if (url === '/posts' && method === 'POST') {
        req.on('data', (data) => {
            bufferedData = data;
        });
        req.on('end', () => {
            const parsedData = JSON.parse(bufferedData);
            if (parsedData) {
                console.log(parsedData);
                res.write(JSON.stringify(parsedData));
                res.end();
            } else {
                res.write("No data found");
                res.end();
            }
        });
    }
    //AddPost
    else if (url === '/addposts' && method === 'POST') {
        let bufferedData;
        req.on('data', (data) => {
            bufferedData = data;
        });
        req.on('end', () => {
            const parsedData = JSON.parse(bufferedData);
            let result = users.find((user) => user.id === parsedData.id);
            console.log(result);
            if (result) {
                res.write("User already exist");
                res.end();
            } else {
                users.push(parsedData);
                const myJson = JSON.stringify(users);
                res.write(myJson);
                res.end();
            }
        });
    }
    //Get all Posts reversed(but don't change the order of the main array)
    else if (url === '/reverseposts' && method === 'POST') {
        let bufferedData;
        req.on('data', (data) => {
            bufferedData = data;
        });
        req.on('end', () => {
            const parsedData = JSON.parse(bufferedData);
            users.push(parsedData);
            let result = users.reverse();
            if (result) {
                res.write(JSON.stringify(result));
                res.end();
            } else {
                res.write("No data found");
                res.end();
            }
        });
    }
    //delete post
    else if (url === '/deleteposts' && method === 'POST') {
        let bufferedData;
        req.on('data', (data) => {
            bufferedData = data;
        });
        req.on('end', () => {
            const parsedData = JSON.parse(bufferedData);
            users = users.filter(user => user.id !== parsedData.id);
            res.write(JSON.stringify(users));
            res.end();
        });
    }
    // update post

    else if (url === '/updateposts' && method === 'POST') {
        let bufferedData;
        req.on('data', (data) => {
            bufferedData = data;

        });
        req.on('end', () => {
            const parsedData = JSON.parse(bufferedData);
            let result = users.find((user) => { return user.id === parsedData.id });
            users[result.id - 1].name = parsedData.name;
            console.log(users);
            res.write(JSON.stringify(users));
            res.end();

        });
    }

    //search post by id
    else if (url === '/searchposts' && method === 'POST') {
        let bufferedData;
        req.on('data', (data) => {
            bufferedData = data;
        });
        req.on('end', () => {
            const parsedData = JSON.parse(bufferedData);
            let result = users.find((user) => user.id === parsedData.id);
            users.forEach(ele => {
                if (ele.id === parsedData.id) {
                    res.write(JSON.stringify(ele.name));
                    res.end();
                }
            });
        });
    }

}).listen(2000, () => console.log('Server is running on port 2000'));