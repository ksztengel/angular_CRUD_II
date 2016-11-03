const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


/* GET users listing. */
router.get('/', (req, res, next) => {
    knex('bucaneers')
        .then(bucaneers => {
            //send data to client
            res.json(bucaneers)
        })
});

router.get('/:id', function(req, res) {
    knex('bucaneers')
        .where('id', req.params.id)
        .first()
        .then(function(bucaneer) {
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

router.put('/:id', (req, res, next) => {
    knex('bucaneers')
        .where('id', req.params.id)
        .update(req.body)
        .then((bucaneer) => {
            //send data to client
            res.json(bucaneer)
        })
})
router.delete('/:id', (req, res, next) => {
    knex('bucaneers')
        .where('id', req.params.id)
        .delete()
        .then(() => {
            //back to bucaneers
            res.json('Bucaneer is Deleted!')
        })
})

module.exports = router;
