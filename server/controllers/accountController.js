const authTokens = {};

exports.register = function (req, res) {
  const {
    email, firstName, lastName, password, confirmPassword,
  } = req.body;

  // Check if the password and confirm password fields match
  if (password === confirmPassword) {
    // Check if user with the same email is also registered
    if (users.find((user) => user.email === email)) {
      res.render('register', {
        message: 'User already registered.',
        messageClass: 'alert-danger',
      });

      return;
    }

    const hashedPassword = getHashedPassword(password);

    // Store user into the database if you are using one
    users.push({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res.render('login', {
      message: 'Registration Complete. Please login to continue.',
      messageClass: 'alert-success',
    });
  } else {
    res.render('register', {
      message: 'Password does not match.',
      messageClass: 'alert-danger',
    });
  }
};

exports.login = function (req, res) {
  const { email, password } = req.body;
  const hashedPassword = getHashedPassword(password);

  const user = users.find((u) => u.email === email && hashedPassword === u.password);

  if (user) {
    const authToken = generateAuthToken();

    // Store authentication token
    authTokens[authToken] = user;

    // Setting the auth token in cookies
    res.cookie('AuthToken', authToken);
    // Redirect user to the protected page
    res.redirect('/hw');
  } else {
    res.render('login', {
      message: 'Invalid username or password',
      messageClass: 'alert-danger',
    });
  }
};

const generateAuthToken = () => crypto.randomBytes(30).toString('hex');

const crypto = require('crypto');

const getHashedPassword = (password) => {
  const sha256 = crypto.createHash('sha256');
  const hash = sha256.update(password).digest('base64');
  return hash;
};

const users = [
  // This user is added to the array to avoid creating a new user on each restart
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@email.com',
    // This is the SHA256 hash for value of `password`
    password: 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=',
  },
];
