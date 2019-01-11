//MODULES
const express = require('express');
const hbs = require('hbs');

let app = express();
hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');

//HBS HELPERS
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home page',
        welcomeMsg: 'Welcome to this piece of sht.'
    })
});


app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page',
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Something went wrong :('
    })
});

app.listen(3000);