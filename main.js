const express = require('express');
const app = express();
const dot_env = require('dotenv');

dot_env.config();
// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res)=>{
    res.json({name:"Elipsis...", env:process.env.NODE_ENV});
});

app.use('/devices', require('./routes/devices'));
app.use('/users', require('./routes/users'));
app.use('/roles', require('./routes/roles.js'));

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})