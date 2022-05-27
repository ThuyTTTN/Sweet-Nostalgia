//  Moudles required:
const express = require('express');
const routes = require('./controllers');
const sequelize  = require('./config/connection');
const exphbs = require('express-handlebars');


const PORT = process.env.PORT || 3001;
const app = express();

//  helper variables for handlesbars
const hbs = exphbs.create();


//  use handlebars
app.engine('handlebars', hbs.engine);
// set handlebars as the default engine
app.set('view engine', 'handlebars');
// set up routes and controllers
app.use(routes);


app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
    sequelize.sync({ force: false })
});

