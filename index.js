require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 3500;
server.listen(port, () => console.log(`Listening to port ${port}`));