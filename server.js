//Express
var express = require ('express');
var app = express();
var PORT = process.env.PORT || 9001;


//feeding JS and CSS directories
app.use('/js', express.static("public/js"));
app.use('/css', express.static("public/css"));
app.use('/images', express.static("/public/images"));

//feeding in HTML views
app.get('/', function(req, res){
  res.render("home");
});

//listener
app.listen(PORT, function(){
  console.log("Goliath Online on port %s", PORT);
});