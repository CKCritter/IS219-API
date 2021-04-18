const express = require('express');
const server = express();
const cors = require('cors');
const open = require("open");
const bodyParser = require('body-parser');
server.use(cors());
server.use(express.static('docs'));
open("http://localhost:9080");

const hwRoutes = require("./routes/hw.routes");

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.use('/api/v1/hw_100', hwRoutes);


server.set('port', process.env.PORT || 9080);
server.set('ip', process.env.NODEJS_IP || '127.0.0.1');

server.listen(server.get('port'), function() {
    console.log('%s: Node server started on %s ...', Date(Date.now()), server.get('port'));
});