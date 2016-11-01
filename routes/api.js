const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


/* GET users listing. */
router.get('/', (req, res, next) => {
  knex('bucaneers')
    .then(bucaneers =>{
      //send data to client
      res.json(bucaneers)
    })

});

module.exports = router;
