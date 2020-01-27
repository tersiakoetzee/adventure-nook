// const flash = require('express-flash');
// const session = require('express-session');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

let app = express();

// app.use(flash());

let PORT = process.env.PORT || 3009;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())

// app.use(session({
//     secret: "error",
//     resave: false,
//     saveUninitialized: true
// }));

// app.use(flash(app));

const handlebarSetup = exphbs({
    partialsDir: "./views/partials",
    viewPath: './views',
    layoutsDir: './views/layouts'
});

app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');

app.get('/', async function (req, res) {
    res.render('index')
});
app.post('/test', async function (req, res) {
  if(req.body.prov)
// console.log(req.body.prov);

  res.redirect('/wc')
});

app.get('/wc', async function (req, res) {
  res.render('wc')
});

app.post('/test', async function (req, res) {
  res.redirect('/wc')
});

app.get('/mp', async function (req, res) {
  res.render('mp')
});

app.post('/test1', async function (req, res) {
  res.redirect('/mp')
});

app.get('/li', async function (req, res) {
  res.render('li')
});

app.post('/test2', async function (req, res) {
  res.redirect('/li')
});

app.get('/page', async function(req, res){
  res.render('page')
});

app.post('/sign', async function(req, res){
res.redirect('/page')
});

app.get('/thanks', async function(req, res){
  res.render('thanks')
});

app.post('/done', async function(req, res){
res.redirect('/thanks')
});



app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});
//https://git.heroku.com/adventurenook.git