const path = require('path')
const dotenv = require('dotenv')

dotenv.config({path: path.join(__dirname, './.env')})

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

    // Connection.connect(function (err) {
    //     if (err) throw err;
    //     console.log("DB Connected!");
    // });

    // module.exports = connection;

    // Connection.createQuery('select * from memberinfo', function(err, results, fields) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     console.log(results);
    // });

    // Connection.end();

    let sql = 'SELECT * FROM crew_info';
    let [rows,fields] = await db.query(sql);
    console.log(rows);


};
test();
