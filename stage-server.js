const port = parseInt(process.env.PORT, 10) || 4000;
const path = require('path');
const express = require('express');
const server = express();
//server.use(express.static("public/fr"));
server.use('/', express.static(path.join(__dirname, "public/en")));
server.use('/fr', express.static(path.join(__dirname, "public/fr")));
server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
});

