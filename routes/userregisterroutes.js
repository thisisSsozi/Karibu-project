const express = require("express");
const Sale = require("../models/Sale");

const router = express.Router();
const Userregister = require('../models/Userregister');

router.get('/', (req, res) => {
  if (req.session.user) {
    res.render('userreg');
  } else {
    console.log('Can not find session');
    res.redirect('/');
  }
});

router.post('/', async (req, res) => {
  const user = new Userregister(req.body);
  await Userregister.register(user, req.body.password, (err) => {
    if (err) {
      res.status(400).redirect('/register/userlist');
      console.log(err);
    } else {
      res.redirect('/register');
      console.log('Successful registration');
    }
  });
});

router.get('/userlist', async (req, res) => {
  try {
    const users = await Userregister.find({});
    res.render('userlist', {
      users: users,
    });
    console.log(users);
  } catch (error) {
    res.status(400).send("List not found");
    console.log(error);
  }
});

router.post("/delete", async (req, res) => {
  try {
    await Userregister.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (err) {
    res.status(400).send("Unable to delete User in the database");
  }
});

// editing the users list
router.get("/edituser/:id", async (req, res) => {
  try {
    const person = await Userregister.findOne({ id: req.params.id });
    res.render("edituser", { user: person });
  } catch (error) {
    res.send("User not found in DB");
  }
});

router.post("/edituser", async (req, res) => {
  try {
    await Userregister.findOneAndUpdate({ _id: req.query.id }, req.body);

    res.redirect("/register/userlist");
  } catch (error) {
    res.send("Failed to update user");
    console.log(error);
  }
});

module.exports = router;
