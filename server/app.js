var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');
var User = sequelize.import('./models/users');

//app includes the headers.js file
app.use(require('./middleware/headers'));

app.use('/api/test', function (req, res) {
    res.send("Hello World");
});
app.listen(3000, function () {
    console.log("app is listening on 3000");
});





app.use(bodyParser.json());




User.sync(); //User.sync({force:true});

app.post('/api/user', function (req, res) {
    //when we post to api user, it will want a user object in the body
    var username = req.body.user.username;
    var pass = req.body.user.password;
    // Need to create a user object and use sequelize to put that user into our database


    User.create({
        username: username,
        passwordhash: ""
    }).then(
        // Sequelize is going to return the object it created from db.

        function createSuccess(user) {
            //successful get this:
            res.json({
                user: user,
                message: 'create'
            })
        },
        function createError(err) {
            res.send(500, err.message);
        }
        );
})