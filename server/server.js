const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const open = require("open");

const server = express();

server.use(cors());

server.engine('hbs', handlebars({
    extname: '.hbs',
}));

const hwRoutes = require("./routes/hw.routes");
const mainRoutes = require("./routes/main.routes");

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cookieParser());

server.use((req, res, next) => {
    // Get auth token from the cookies
    const authToken = req.cookies['AuthToken'];

    // Inject the user to the request
    req.user = authToken[authToken];

    next();
});

server.use('/api/v1/hw_100', hwRoutes);
server.use('', mainRoutes);

server.set('view engine', 'hbs');
server.set('port', process.env.PORT || 9080);
server.set('ip', process.env.NODEJS_IP || '127.0.0.1');

server.listen(server.get('port'), function() {
    console.log('%s: Node server started on %s ...', Date(Date.now()), server.get('port'));
});

open("http://localhost:9080");
