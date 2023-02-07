import DBConnection from "../../DataBase/Connections.js";

const addUsers = (req, res) => {
    const { name, email, password, age } = req.body;
    const sql = `INSERT INTO users (name, email, password, age) VALUES ('${name}', '${email}', '${password}', '${age}')`;
    DBConnection.execute(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};
const getallusers = (req, res) => {
    const sql = `SELECT * FROM users`;
    DBConnection.execute(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

const updateuser = (req, res) => {
    const { name, email, password, age } = req.body;
    const sql = `UPDATE users SET name = '${name}', email = '${email}', password = '${password}', age = '${age}' WHERE id = ${req.params.id}`;
    DBConnection.execute(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

const deleteuser = (req, res) => {
    const sql = `DELETE FROM users WHERE id = ${req.params.id}`;
    DBConnection.execute(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

const searchuser = (req, res) => {
    const sql = `SELECT * FROM users WHERE name LIKE 'a%' AND age < 30`;
    DBConnection.execute(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

const searchuserbyids = (req, res) => {
    const sql = `SELECT * FROM users WHERE id IN (1,2,3)`;
    DBConnection.execute(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

const getalluserswithproducts = (req, res) => {
    const sql = `SELECT * FROM users INNER JOIN products ON users.id = products.createdby`;
    DBConnection.execute(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};



export {
    addUsers,
    getallusers,
    updateuser,
    deleteuser,
    searchuser,
    searchuserbyids,
    getalluserswithproducts
};