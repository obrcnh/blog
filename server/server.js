const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const connectMongo = require('connect-mongo')(session);
const router = require('./router');
const app = express();

const resolve = file => path.resolve(__dirname, file);

app.use('/dist', express.static(resolve('../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

// session
app.set('trust proxy', 1); // trust first proxy
app.use(session({
	secret: 'my_blog',
	resave: false,
	saveUninitialized: true,
	cookie: {
		secure: true,
		maxAge: 2592000000
	},
	store: new connectMongo({
		url: 'mongodb://localhost:27017/my_blog'
	})
}));

app.get('*', function (req, res) {
    let html = fs.readFileSync(resolve('../' + 'index.html'), 'utf-8')
    res.send(html);
});
  
app.listen(3600, function () {
    console.log('访问地址为：localhost:3600')
});