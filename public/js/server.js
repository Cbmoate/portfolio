var express = require ('express');
var app = express();
var PORT = process.env.PORT || 9001;

//feeding JS and CSS directories
app.use('/js', express.static("public/js"));
app.use('/css', express.static("public/css"));
app.use('/images', express.static("/public/images"));

//feeding in HTML views
app.get('/home', function(req, res){
  res.sendFile(process.cwd()+ "/views/home.html");
});

app.get('/blog', function(req, res){
  res.sendFile(process.cwd()+ "/views/blog.html");
});

app.get('/rules', function(req, res){
  res.sendFile(process.cwd()+ "/views/rules.html");
});

app.get('/clickFace', function(req, res){
  res.sendFile(process.cwd()+ "/views/clickFace.html");
});

app.get('/theGame', function(req, res){
  res.sendFile(process.cwd()+ "/views/theGame.html");
});
//listener
app.listen(PORT, function(){
  console.log("Listening on port %s", PORT);
});