const express = require('express');
const app = express();
const dot_env = require('dotenv');

dot_env.config();
// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res)=>{
    res.json({name:"vorah-water-api-v1.0", env:process.env.NODE_ENV});
});

app.use('/devices', require('./routes/devices'));
app.use('/users', require('./routes/users'));
app.use('/roles', require('./routes/roles.js'));
app.use('/healths', require('./routes/healths.js'));
app.use('/errors', require('./routes/errors.js'));
app.use('/collections', require('./routes/collections.js'));
app.use('/securities', require('./routes/securities.js'));
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log('listening on port '+port);
})