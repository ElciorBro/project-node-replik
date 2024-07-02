const { conn } = require('../db/dbconnect');

module.exports = {
    getProduct : async(req, res) => {
        try {
            const [ registros ] = await conn.query(`SELECT * FROM products`);
            res.json(registros);
            // res.sendFile(path.join(__dirname + '../../public/shop.html'));
        } catch (error) {
            throw error;
        } finally {
            conn.releaseConnection();
        }
    }
}