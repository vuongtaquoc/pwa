const express = require('express');
const path = require('path');

const app = express();

app.use('/sw', express.static(path.join(__dirname, 'src')));

app.listen(3001, () => console.log('Ready 3001'))
