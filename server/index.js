const express = require('express'),
  app = express(),
  port = process.env.PORT || 8000;
  bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var routes = require('./routes');
routes(app);


app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

