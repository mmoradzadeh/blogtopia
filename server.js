const express = require('express');
const session = require('express-session');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const path = require('path');
const helpers = require('./utils/helpers');

const exhbs = require('express-handlebars');
const hbs = exhbs.create({helpers});

const app = express();
const PORT = process.env.PORT || 3014;

const sessionOptions = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 1 * 60 * 60 * 1000
    },
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize
    }) 
};

app.use(session(sessionOptions));

app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

app.use(routes);

app.listen(PORT,()=>{
    console.log(`App listening on http://localhost:${PORT}`);
    sequelize.sync({ force: false });
});