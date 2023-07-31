const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers/');
const exhbs = require('express-handlebars');
const hbs = exhbs.create({});
const path = require('path');

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