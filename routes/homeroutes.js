const { Router } = require('express');
const express = require('express');
const passport = require('passport');
const roles = require('./role');
const router = express.Router();


router.get('/', (req,res)=>{
    res.render("login");
});

router.post('/', passport.authenticate('local', { failureRedirect: '/' }), (req, res) => {
    req.session.user = req.user
    const userrole = roles[req.user.role]
    if(userrole == 'Agent'){
        res.redirect('/sales')
    }
    else if (userrole == 'Director'){
        res.redirect('/register')
    }
    else if (userrole == 'Manager'){
        res.redirect('/procurement')
    }
    else {
        res.redirect('/nonuser')
    }
})

router.get('/logout', (req, res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    })
})


module.exports = router