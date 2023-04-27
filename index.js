const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors');

app.use(cors());

const categories = require('./data/categories.json')

app.get('/', (req, res) => {
  res.send('Dragon is running!')
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
  res.send(news);
})



app.listen(port, () => {
    console.log(`Dragon api is running on port: ${port}`)
})