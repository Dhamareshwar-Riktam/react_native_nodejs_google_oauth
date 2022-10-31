const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
    '/google/callback',
    passport.authenticate('google'),
    (req, res) => {
        console.log('Google Sign In Successful');
        res.redirect("msrm42app://msrm42app.io?id=" + req.user.id);
    }
);


module.exports = router;