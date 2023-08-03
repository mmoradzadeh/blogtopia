const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');

const path = require('path');
const helpers = require('./utils/helpers');

const exhbs = require('express-handlebars');
const hbs = exhbs.create({helpers});

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

// app.use(require('./controllers/'));
app.use(routes);

app.listen(PORT,()=>{
    console.log(`App listening on http://localhost:${PORT}`);
    sequelize.sync({ force: false });
});