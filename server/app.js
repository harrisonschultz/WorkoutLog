var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');
var User = sequelize.import('./models/users');

app.use(bodyParser.json());


app.use('/api/user', require('./routes/user'));
app.use('/api/login', require('./routes/session'));


//app includes the headers.js file
app.use(require('./middleware/headers'));

app.use('/api/test', function (req, res) {
    res.send("Hello World");
});
app.listen(3000, function () {
    console.log("app is listening on 3000");
});









User.sync(); //User.sync({force:true});

