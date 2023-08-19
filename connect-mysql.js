const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ql_ban_hang'
})

connection.connect(function(err){
    if(err){
        console.log('err')
    }
    else{
        console.log('kết nối thành công')
    }
})

module.export = connection