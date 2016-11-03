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

router.get('/:id', function(req, res) {
  console.log(req.params);
  knex('bucaneers')
    .where('id', req.params.id)
    .first()
    .then(function(bucaneer) {
      console.log(bucaneer);
      res.send(bucaneer);
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

router.put('/', (req, res, next) => {
  knex('bucaneers')
    .insert(req.body)
    .then((bucaneer) => {
      //send data to client
      res.json(bucaneer)
    })
})
router.delete('/', (req, res, next) => {
  knex('bucaneers')
    .where('id', req.params.id)
    .then(() => {
      //back to bucaneers
      res.redirect('/')
    })
})

module.exports = router;
