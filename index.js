const express = require('express');
const expressLayouts = require('express-ejs-layouts');
// const flash = require('connect-flash');
const session = require('express-session');
const passport =require('passport');

const app = express();
const port = 7373;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index', {page : 'home'});
});

app.get('/about-us', (req, res) => {
    res.render('pages/about-us', {page : 'about'});
});

app.get('/services', (req, res) => {
    res.render('pages/services', {page : 'services'});
});

app.get('/contact', (req, res) => {
    res.render('pages/contact', {page : 'contact'});
});

app.get('/login', (req, res) => {
    res.render('pages/blog', {page : 'login'});
});

app.get('/logout', (req, res) => {
    res.redirect('/');
});

app.listen(port, (req, res) =>{
    console.log('App listning at Port : ' + port);
    
})