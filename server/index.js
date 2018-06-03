const express = require('express');
const app = express();

//router handler

app.get('/', (req, res) => {
    res.send({ hi: 'there' }); //send back contain json data { }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);