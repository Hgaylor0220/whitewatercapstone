const cors = require('cors');
const uuid = require('uuid').v4;
const next = require('next');
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handler = app.getRequestHandler();

// Ensure that your pusher credentials are properly set in the .env file
// Using the specified variables

app.prepare()
    .then(() => {

        const server = express();

        server.use(cors());
        server.use(logger('dev'));
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));

        server.get('*', (req, res) => {
            return handler(req, res);
        });

        server.listen(port, err => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });

    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });