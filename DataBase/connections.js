import mysql2 from "mysql2";

const DBConnection =mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Assigment4'
});

export default DBConnection;



