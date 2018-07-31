const express = require('express');
const fs = require('fs');
const port = process.env.PORt || 3000;

let app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');

app.get('/', (req, res) => {
    res.render('index.ejs', {
        name: 'Chris Maltais'
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})
