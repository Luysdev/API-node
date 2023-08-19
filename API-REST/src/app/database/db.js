import mysql from 'mysql2'

const dbConex = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : '7489+-20Li',
    database : 'dbcopa'
})

export default dbConex;