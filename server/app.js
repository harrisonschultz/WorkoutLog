var express = require ('express');
var app = express();

//app includes the headers.js file
app.use(require('./middleware/headers'));

app.use('/api/test', function(req,res){
    res.send("Hello World");
});
app.listen(3000, function(){
    console.log("app is listening on 3000");
});


