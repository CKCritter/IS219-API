const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const open = require('open');

const { auth, requiresAuth  } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:9080',
    clientID: 'AX4LKct4qaEQ1VBnDBoynhUeEqZTIsNq',
    issuerBaseURL: 'https://dev-qg8-t8rt.us.auth0.com',
};

const server = express();

server.use(cors());

server.engine('hbs', handlebars({
  extname: '.hbs',
}));

server.use(cookieParser());

server.use((req, res, next) => {
  // Get auth token from the cookies
  const authToken = req.cookies.AuthToken;

  // Inject the user to the request
  req.user = authToken;

  next();
});

const hwRoutes = require('./routes/hw.routes');
const mainRoutes = require('./routes/main.routes');

// auth router attaches /login, /logout, and /callback routes to the baseURL
server.use(auth(config));

// req.isAuthenticated is provided from the auth router
server.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

server.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use('/api/v1/hw_100', hwRoutes);
server.use('', mainRoutes);

server.set('view engine', 'hbs');
server.set('port', process.env.PORT || 9080);
server.set('ip', process.env.NODEJS_IP || '127.0.0.1');

server.listen(server.get('port'), () => {
  console.log('%s: Node server started on %s ...', Date(Date.now()), server.get('port'));
});

open('http://localhost:9080');
