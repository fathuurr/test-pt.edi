const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./api');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);

const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
