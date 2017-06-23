//user model created using sequlize
//talks to the table user

module.exports = function(sequelize, DataTypes){
var User = sequelize.define('user', {
    username: DataTypes.STRING,
    passwordhash: DataTypes.STRING
});
return User;
};