const express = require('express');
var conn = require('./connect-mysql')
const app = express();

app.set('view engine', 'ejs');
app.use(express.static ('public'));
const PORT = process.env.PORT || 3000;
app.get("/", function (req,res){
    res.render('home')
})
app.get('/danh-muc', function (req, res) {
    let sql = "SELECT * FROM category ORDER BY id DESC";
    conn.query(sql, function (err, result) {
        // console.log(err, result);
        res.render('category', {
            data: result
        })
    });
})

app.get("/them-danh-muc", function (req,res){
    res.render('category-add')
})

app.listen(PORT, function(){
    console.log('server listening on http://localhost:'+ PORT); 
})