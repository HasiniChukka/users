const express = require('express');
const router = express.Router();
const users = require('../services/users');




/* GET programming languages. */
router.get('/login', async function(req, res, next) {
    try {
      res.json({message: "OK"});
    } catch (err) {
      console.error(`Error while base url..`, err.message);
      next(err);
    }
  });

router.post('/registration', async function(req, res, next) {
  try {
    res.json(await users.registration(req.body));
  } catch (err) {
    console.error(`Error while registartion`, err.message);
    next(err);
  }
});





module.exports = router;
