const express  = require('express');

const router = express.Router();

router.get('/ping', (req, res) => res.send({ message: 'Pong' }));

router.get('/hello', (req, res) => res.send({ message: 'World' }));

exports.routes = router;