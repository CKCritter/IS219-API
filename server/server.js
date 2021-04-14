const express = require('express');
const server = express();
const cors = require('cors')
const open = require("open");
server.use(cors())
server.use(express.static('docs'));
open("http://localhost:9080");

server.get('/api/v1/hw_100', function(req, res) {
        const mysql = require('mysql');
        const conn = mysql.createConnection({
            host: 'localhost',
            port: '32000',
            user: 'root',
            password: 'root',
            database: 'height_weight',
        });

        conn.connect();
        conn.query('SELECT * FROM hw_100', function (err, rows, fields) {
            if (err) throw err;
            res.json({ "data": rows});
        })
        conn.end();
    }
)

server.set('port', process.env.PORT || 9080);
server.set('ip', process.env.NODEJS_IP || '127.0.0.1');

server.listen(server.get('port'), function() {
    console.log('%s: Node server started on %s ...', Date(Date.now()), server.get('port'));
});