const request= require('supertest')
const server = require('./server.js');

const db = require('../data/dbConfig.js');


describe('server.js', () => {

    describe('GET /', () => {

       it('should return 200 using async/await', async () => {
        const res = await request(server).get('/');
        expect(res.status).toBe(200);
       })


       it('should return JSON', async () => {
        const res = await request(server).get('/');
        expect(res.type).toBe('application/json');
       })

       it('should return api up', async () => {
        const res = await request(server).get('/');
        expect(res.body).toEqual({ api: 'up' });
       });
    });
});

describe('GET /games', () => {
    afterEach( async () => {
        await db('games').truncate();
    } )
    it('should hit endpoint', async () => {
        const res = await request(server).get('/games');
        expect(res.status).toBe(200);
        expect(res.body).toEqual([]);
    });

    it('should return all games in db', async() => {
        const games = [
            { id: 1,  title: 'Pacman', genre:'Arcade', releaseYear: 1980 },
            { id: 2, title: 'Mario Maker', genre: 'Platformer', releaseYear: null }
        ];

        await db('games').insert(games);

        const res = await request(server).get('/games');
        expect(res.status).toBe(200);
        expect(res.body).toEqual(games);
    })

    it('should return empty array if no games', async() => {
        const games = [];
        
        const res = await request(server).get('/games');
        expect(res.status).toBe(200);
        expect(res.body).toEqual([]);
    })
})

describe('POST /games', () => {
    afterEach( async () => {
        await db('games').truncate();
    })

    it('should hit endpoint', async () => {
        const res = await request(server).get('/games');
        expect(res.status).toBe(200);
        expect(res.body).toEqual([]);
    });



})