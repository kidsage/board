const express = require('express');
const router = express.Router();
const db = require('../modules/dbConfig');

/* GET user info */
router.get('/user', function (req, res, next) {
  db.select('id', 'passwd')
    .from('user')
    .where('id', 'id1')
    .then((row) => {
      res.status(200).json({
        data: row,
      });
    });
});

module.exports = router;
