const fs = require('fs');
let data = fs.readFileSync('products.json') || [];
let parsedData = JSON.parse(data);
const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', (req, res) => res.send(JSON.stringify({test: "elo elo 3 2 0"})))

app.get('/products', (req, res) => res.send(JSON.stringify(parsedData)))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
