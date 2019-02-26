const port = parseInt(process.env.PORT, 10) || 4000;
const express = require('express');
const server = express();
server.use(express.static('public/en'));
server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
});