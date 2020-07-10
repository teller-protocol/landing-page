var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var app = express();
// enable ssl redirect
app.use(sslRedirect());
app.use(express.static('public'))

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
