var express = require('express');
var router = express.Router();
var city = [
  {name: 'Paris'},
  {name: 'Londres'},
  {name: 'Geneve'},
  {name: 'Madrid'}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:'appli meteo', city: city});
});

router.post('/add-city', function(req, res, next) {
  newCity = {name: req.body.city};
  city.push(newCity);
  res.render('index', {city: city});
});

router.get('/delete-city', function(req, res, next) {
  city.splice(req.query.position, 1);
  res.render('index', {city: city});
})

module.exports = router;
