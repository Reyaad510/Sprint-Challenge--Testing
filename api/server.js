const express = require('express');

const Games = require('../games/gamesModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

server.get('/games', (req, res) => {
    Games.getAll()
      .then(games => {
          res.status(200).json(games);
      })
      .catch(error => {
          res.status(500).json(error);
      });
});

server.post('/games', async (req, res) => {
    const game = req.body;

    if(game.title && game.genre) {
        try {
          const inserted = await Games.insert(game);
          res.status(201).json(inserted);
        } catch (err) {
            res.status(500).json({ mess: 'Ran into error creating new game' })
        }
    } else {
        res.status(422).json({ mess: 'Provide title and genre' })
    }
});

module.exports = server;