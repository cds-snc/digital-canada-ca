const express = require('express');
const app = express();
app.use(express.static('public/en'));
app.listen(3000);