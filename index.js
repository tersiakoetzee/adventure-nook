// const flash = require('express-flash');
// const session = require('express-session');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const guest = require('./guest.js')


const pg = require("pg");
const Pool = pg.Pool;

const GetGuest = guest(Pool)

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

//home
app.get('/', async function (req, res) {
  res.render('index')
});
app.post('/test', async function (req, res) {
  var visitwc = req.body.prov
  await GetGuest.provinces(req.body.prov)
  console.log(visitwc, ";)");
  res.redirect('/wc')

});

app.get('/wc', async function (req, res) {
  res.render('wc')
});

app.get('/mp', async function (req, res) {
  res.render('mp')
});

app.get('/li', async function (req, res) {
  res.render('li')
});

app.post('/test1', async function (req, res) {
  var visitmp = req.body.prov
  GetGuest.provinces(visitmp)
  console.log(visitmp, ":0");

  res.redirect('/mp')
});

app.post('/test2', async function (req, res) {
  var visitli = req.body.prov
  GetGuest.provinces(visitli)
  console.log(visitli, ";{");

  res.redirect('/li')
});
//home


//camping///
app.get('/wcamping', async function (req, res) {
  res.render('wcamping')
});

app.post('/wcamping', async function (req, res) {
  var wcamp = req.body.acc
  GetGuest.getAccommodation(wcamp)
  res.redirect('/wcamping')
  console.log(wcamp, ":(");

});

app.get('/mpcamping', async function (req, res) {
  res.render('mpcamping')
});

app.post('/mpcamping', async function (req, res) {
  var mpcamp = req.body.acc
  GetGuest.getAccommodation(mpcamp)
  res.redirect('/mpcamping')
  console.log(mpcamp, "<)");

});

app.get('/licamping', async function (req, res) {
  res.render('licamping')
});

app.post('/licamping', async function (req, res) {
  var licamp = req.body.acc
  GetGuest.getAccommodation(licamp)
  res.redirect('/licamping')
  console.log(licamp, "})");
});
//camping//


//selfcater//
app.get('/wcselfc', async function (req, res) {
  res.render('wcselfc')
});

app.post('/wcselfc', async function (req, res) {
  var wselfc = req.body.acc
  GetGuest.getAccommodation(wselfc)
  res.redirect('/wcselfc')
  console.log("ws");

});

app.get('/mpselfc', async function (req, res) {
  res.render('mpselfc')
});

app.post('/mpselfc', async function (req, res) {
  var mself = req.body.acc
  GetGuest.getAccommodation(mself)
  res.redirect('/mpselfc')
  console.log("ms");

});

app.get('/liselfc', async function (req, res) {
  res.render('liselfc')
});

app.post('/liselfc', async function (req, res) {
  var lself = req.body.acc
  GetGuest.getAccommodation(lself)
  res.redirect('/liselfc')
  console.log("ls");

});
//selfcater//

//bnb///
app.get('/mpbnb', async function (req, res) {
  res.render('mpbnb')
});

app.post('/mpbnb', async function (req, res) {
  var mbnb = req.body.acc
  GetGuest.getAccommodation(mbnb)
  res.redirect('/mpbnb')
});

app.get('/libnb', async function (req, res) {
  res.render('libnb')
});

app.post('/libnb', async function (req, res) {
  var lbnb = req.body.acc
  GetGuest.getAccommodation(lbnb)
  res.redirect('/libnb')
  console.log("lbnb");

});

app.get('/wcbnb', async function (req, res) {
  res.render('wcbnb')
});

app.post('/wcbnb', async function (req, res) {
  var wbnb = req.body.acc
  GetGuest.getAccommodation(wbnb)
  res.redirect('/WCbnb')
  console.log("wbnb");

});
//bnb//





app.get('/page', async function (req, res) {
  res.render('page')
});

app.post('/page', async function (req, res) {
  console.log(req.body.start);
  console.log(req.body.end);
  console.log(req.body.acctype)
  res.redirect('/page')
});

app.get('/thanks', async function (req, res) {
  res.render('thanks')
});

app.post('/done', async function (req, res) {
  res.redirect('/thanks')
});




app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});
//https://adventurenook.herokuapp.com/