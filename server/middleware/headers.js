
//creating a node module that allows our server to accept requests from any origin
module.exports = function(req,res,next){
res.headder('access-control-allow-origin', '*');
next();
}