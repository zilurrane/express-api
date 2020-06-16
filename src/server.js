const express = require('express')
const bodyParser = require('body-parser');
const constMessage = require('./shared/constant');
const app = express()
const healthcheckRoutes = require('./routes/healthCheck');
const mathRoutes = require('./routes/Math');

const port = 3000

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('Time:', Date.now());
    // if(req.body.a && req.body.b) {
        next();
    // }
    // else {
    //     res.status(400).send();
    // }
  });

app.get('/', (req, res) => res.send(constMessage))

app.use('/healthCheck', healthcheckRoutes.routes);
app.use('/math', mathRoutes.routes);

app.listen(port, () => console.log(`Express API listening at http://localhost:${port}`))


// healthcheck / ping

// Maths / add, multi