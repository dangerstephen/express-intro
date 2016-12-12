// server.js
  // SERVER-SIDE JAVASCRIPT
  // server.js

  var express = require('express');
  var app = express();

app.use(express.static('public'));

  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  // server.js data
   var albums = [
     {
       title: 'Cupid Deluxe',
       artist: 'Blood Orange'
     },
     {
       title: 'M3LL155X - EP',
       artist: 'FKA twigs'
     },
     {
       title: 'Fake History',
       artist: 'letlive.'
     }
   ];
   var cites = [
     {
name: "saltLake",
population: "lots"
},
{
name: "denver",
population: "more"
},
{
  name: "NewYork",
  population: "toMany"
}
   ];


  app.get('/', function (req, res) {
    res.sendFile('views/index.html', {root : __dirname});
  });

  app.get('/api/albums', function(req, res) {
    res.json(albums);
  });

  app.get('/api/cites', function (req, res){
    res.json(cites);
  });

  app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening at http://localhost:3000/');
  });
