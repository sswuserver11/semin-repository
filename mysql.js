const path = require('path')
const dotenv = require('dotenv')

dotenv.config({path: path.join(__dirname, './.env')})

// require('dotenv').config();
const mysql = require('mysql2/promise');

let test = async () => {
    const db = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        waitForConnections: true,
        insecureAuth: true
    });

    let sql = 'SELECT * FROM memberinfo';
        let [rows, fields] = await db.query(sql);
        console.log(rows);
};
test();

