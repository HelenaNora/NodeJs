// const http = require('http');

// const server = http.createServer((req, res, next) => {
//     // console.log(req.url);
//     if (req.url == '/') {
//         res.write("<h1>Hello Node</h1>");
//         res.end();
//     }
//     if (req.url == '/user') {
//         res.write("<p>Hello User</p>");
//         res.end();
//     }
// });

// server.listen(3000);

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

const webRoute = require('./routes/web');
const error404 = require('./controllers/error');

app.use(webRoute);
app.use(error404.get404);


app.listen(3000);