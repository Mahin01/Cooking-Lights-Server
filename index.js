const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Cooking Lights Running');
  })
  
  app.listen(port, () => {
    console.log(`Cooking Lights running on port: ${port}`)
  })