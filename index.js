const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const chefData = require('./data/chefsData.json');
const chefRecipe = require('./data/chefsRecipe.json');

app.get('/', (req, res) => {
    res.send('Cooking Lights Running');
});

app.get('/chefs-data', (req, res) => {
    res.send(chefData);
});

app.get('/chefs-recipe', (req, res) => {
    res.send(chefRecipe);
});
  
app.listen(port, () => {
  console.log(`Cooking Lights running on port: ${port}`)
});