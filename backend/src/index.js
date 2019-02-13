const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');

// para o servidor entender requisições real time
const server = require('http').Server(app);

app.use(cors());
app.use(routes);

server.listen(3003, () => {
    console.log('Server started on port 3003');
})