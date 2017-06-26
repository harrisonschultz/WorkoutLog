
//creating a node module that allows our server to accept requests from any origin
module.exports = function (req, res, next) {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET,POST,PUT,DELTE');
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
};