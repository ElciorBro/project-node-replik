const { conn } = require('../db/dbconnect');

module.exports = {
    getProduct : async(req, res) => {
        try {
            const [ registros ] = await conn.query(`SELECT * FROM products`);
            res.json(registros);
        } catch (error) {
            throw error;
        } finally {
            conn.releaseConnection();
        }
    },

    crearProducto: async (req, res) => {
        const sql = `INSERT INTO products (title, category, description, price, image, available, calification) VALUES (?, ?, ?, ?, ?, ?, ?);`
        // console.log(req.body)
        // console.log(req.file)
        // console.log(req)
        const creado = await conn.query(sql, [req.body.title, req.body.category, req.body.description, parseFloat(req.body.price), "IMG/productAdded/imagen_" + req.file.originalname, parseFloat(req.body.available), parseFloat(req.body.calification)])

        res.redirect('/shop.html')
    },

    deleteProduct: async (req, res) => {
        console.log(req.body);
        const deleteProduct = await conn.query(`DELETE FROM products WHERE id=?`, req.body.idDelete);
        res.redirect('/shop.html');
    }
}