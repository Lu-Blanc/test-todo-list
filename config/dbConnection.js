import mysql from 'mysql2';

const db = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    database: process.env.MYSQL_DBNAME || 'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default db;