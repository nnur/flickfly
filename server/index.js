const express = require('express');

const app = express();

const routes = require('./routes');

const port = process.env.PORT || 8000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(routes);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

