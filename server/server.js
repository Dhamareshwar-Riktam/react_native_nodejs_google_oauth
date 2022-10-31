const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport');
const session = require('express-session');


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Configuration
require('./config/passport_google');


// Constants
const PORT = process.env.PORT || 3333;


// Routes
app.get('/', (req, res) => {
    res.send('<a href="/api/auth/google">Authenticate with Google</a>');
});
app.use('/api/auth', require('./routes/auth'));


// Server
app.listen(PORT, () => console.log(`Server running @${PORT}`));