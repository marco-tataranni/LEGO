
var express = require('express');
const projects = require('./projects.json'); 
var app = express();

app.set('view engine', 'pug');   

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    res.render('index', {
    title: 'Homepage',
    projects: projects.modelli

 }); 
});
app.get('/lego', (req, res) => {
  const project = projects.modelli.find((p) => p.Number === req.query.id);
  res.render('lego', {
    title: `About ${project.Numbrer}`,
    project,
  });
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});