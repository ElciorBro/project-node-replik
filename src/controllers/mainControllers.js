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
        const creado = await conn.query(sql, [req.body.title, req.body.category, req.body.description, parseFloat(req.body.price), `IMG/productAdded/imagen_${req.body.image}`, req.body.available, req.body.calification])

        res.redirect('public/shop.html')
    }
}