const express = require('express');
const conn = require('./config/db');
let cors = require('cors')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


// server
const app = express();
app.use(express.json());
app.use(cors())

// connect to the db
conn();

app.use('/api/chars', require('./routes/characters'));
app.use('/api/auth', require('./routes/auth'));

app.listen(4000, () => {
    console.log('server running at port 4000');
})