//SEQUELIZE

var Sequelize = require('sequelize');
var sequelize = new Sequelize('workoutlog', 'postgres', '969440', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function () {
        console.log('connected to workoutlog postgres db');

    },
    function (err) {
        console.log(err);
    }
);
var User = sequelize.import('./models/users');
module.exports = sequelize;