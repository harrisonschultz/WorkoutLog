var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/users');

module.exports = function(req,res,next){
    var sessionToken = req.headers.authorization;

    if (!req.body.user && sessionToken){
        jwt.verify(sessionToken, process.env.JWT_SECRET, function(err,decoded){
            if(decoded){
                User.findOne({
                    where: {id: decoded.id}
                }).then(
                    function(user){
                        console.log("I AM HERE");
                        req.user = user;
                        console.log(req.user.id);
                        next();
                    },
                    function(){
                        res.status(401).send({error: 'Not authorized'});

                    }
                );

            }
            else {
                res.status(401).send({error: 'Not authorized'});
            }
        });
    }
    else {
        next();
    }
}