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

router.post('/', (req, res, next) => {
  knex('bucaneers')
    .insert(req.body)
    .then((bucaneer) => {
      //send data to client
      res.json(bucaneer)
    })
})

module.exports = router;
