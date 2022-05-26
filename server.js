const express = require('express');
const sequelize  = require('./config/connection');


const PORT = process.env.PORT || 3001;
const app = express();



app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
    sequelize.sync({ force: false })
});



