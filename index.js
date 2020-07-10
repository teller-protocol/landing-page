var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var app = express();
// enable ssl redirect
app.use(express.static('public'))
app.use(sslRedirect());

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
