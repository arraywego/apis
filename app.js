const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });


app.get('/dogs', (req, res)=>{
    axios.get('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=3')   
      .then(response=>{
        // handle success
        res.send(response.data)
        
      })
  })
  app.get('/cards', (req,res) =>{
    axios.get('http://deckofcardsapi.com/api/deck/74oslp7kisx0/draw/?count=1')
    .then(response=>{
      // handle success
      res.send(response.data)
      
    })
  })

app.listen(3000);
