const mysql =require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Maxstien',
    password: 'maxstien01',
    database: 'purwadhika_movie',
    port: 3306,
    timezone: 'UTC'
})

module.exports={
    sqlDB:db
}