const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  app.get('/cards', (req,res) =>{
    axios.get('https://deckofcardsapi.com/api/deck/74oslp7kisx0/draw/?count=1')
    .then(response=>{
      // handle success
      return res.send(response.data)
      
    })
  })

app.listen(3000);
