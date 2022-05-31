const path = require('path')
const dotenv = require('dotenv')

dotenv.config({path: path.join(__dirname, './.env')})

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.PB_PW,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql" //어떤 db가 참조하는지 적어둘것
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.PB_PW,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    logging : false
  }
}
