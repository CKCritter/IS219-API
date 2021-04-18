const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    port: '32000',
    user: 'root',
    password: 'root',
    database: 'height_weight',
});
conn.connect();

//Create
exports.post = function(req, res){
    console.log(req.body);
    conn.query('INSERT INTO hw_100 (`Index`,`Height_Inches`,`Weight_Pounds`) VALUES (?, ?, ?)', [req.body.index, req.body.height, req.body.weight], function (err, rows, fields) {
        if (err) throw err;
        res.json({"data": rows})
    })
}

//Read
exports.getAll = function(req, res) {
    conn.query('SELECT * FROM hw_100', function (err, rows, fields) {
        if (err) throw err;
        res.json({"data": rows});
    })
}

exports.getById = function(req, res) {
    conn.query('SELECT * FROM hw_100 WHERE id = ?', [req.params.id], function (err, rows, fields) {
        if (err) throw err;
        res.json({"data": rows});;
    })
}

//Update
exports.put = function(req, res) {
    conn.query('UPDATE hw_100 SET `Index` = ?, `Height_Inches`=?, `Weight_Pounds`=? WHERE id = ?', [req.body.index, req.body.height, req.body.weight, req.params.id], function (err, rows, fields) {
        if (err) throw err;
        res.json({"data": rows});
    })
}

//Delete
exports.delete = function(req, res) {
    conn.query('DELETE FROM hw_100 WHERE id = ?', [req.params.id], function (err, rows, fields) {
        if (err) throw err;
        res.json({"data": rows});;
    })
}
