let express = require('express');
// import body parser
let bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const config = require('./config/config');


const app = express();
// use body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// import routes

require('./userPassport');
require('./routes')(app);


let port = config.port;

sequelize.sync({ force: false }).then(() => {
    app.listen(port, function () {
        console.log('Server running on ' + port)
    })
})