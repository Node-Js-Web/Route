import DBConnection from "../../DataBase/Connections.js";

const addProduct = (req, res) => {
    const { name, description, price, createdby } = req.body;
    const sql = `INSERT INTO products (pName, pDescription, price,createdby) VALUES ('${name}', '${price}', '${description}', '${createdby}')`;
    DBConnection.execute(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

const getallproducts = (req, res) => {
    const sql = `SELECT * FROM products`;
    DBConnection.execute(sql, (err,result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

const updateproduct = (req, res) => {
    const { name, price, description } = req.body;
    const sql = `UPDATE products SET pName = '${name}', pDescription = '${description}', price = '${price}' WHERE createdby = ${req.params.id}`;
    DBConnection.execute(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

const deleteproduct = (req, res) => { 
    const sql = `DELETE FROM products WHERE createdby = ${req.params.id}`;
    DBConnection.execute(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

const searchproduct = (req, res) => {
    const sql = `SELECT * FROM products WHERE price > 3000`;
    DBConnection.execute(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    }
    );
};



export{
    addProduct,
    getallproducts,
    updateproduct,
    deleteproduct,
    searchproduct
}
