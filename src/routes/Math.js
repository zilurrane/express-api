const express  = require('express');

const maths = require('../services/MathService');

const router = express.Router();

router.post('/add/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const addition = maths.addition(a, b);
    res.json({ addition });
});

router.post('/mult', (req, res) => {
    const { a, b } = req.body;
    const multiplication = maths.multiplication(a, b);
    res.send({ multiplication })
});

exports.routes = router;
