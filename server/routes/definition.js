var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import("../models/users");
var Definition = sequelize.import('../models/definition');

router.post('/', function (req, res) {
    //variables
    var description = req.body.definition.desc;
    var logType = req.body.definition.type;
    var owner = req.user.id;
    //methods
    Definition
        //objects must match the model
        .create({
            description: description,
            logType: logType,
            owner: owner
        })
        .then(
        //createSuccess function
        function createSuccess(definition) {
            //seend a response a json
            res.json({
                definition: definition
            });
        },
        //createError function
        function createError(err) {
            res.send(500, err.message);
        }
        );
});
router.get('/', function (req, res) {
    //user variable
    var userid = req.user.id;

    Definition
        //findAll
        .findAll({
            where: {
                owner: userid
            }
        })
        .then(
        //success
        function findAllSuccess(data) {
            //console.log(data);
            res.json(data);
        },
        //error
        function findAllError(err) {
            res.send(500, err.message);
        }
        );
});

module.exports = router;