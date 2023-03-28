const express = require('express');
const app = express();
const path = require('path');
const argv = require('yargs').argv;

const port = argv.port || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.js'));
  });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/projects.html'));
});

app.get('/registration', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/registration.html'));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});