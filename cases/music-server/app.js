const fs = require('fs');
const express = require('express');
const getStat = require('util').promisify(fs.stat);

const MUSIC_FILE = "./cases/music-server/data/Kalimba.mp3"

const app = express();

app.get('/music', async ( req, res ) =>{
    
    const stat = await getStat(MUSIC_FILE);
    
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size/30
    });
    
    const stream = fs.createReadStream(MUSIC_FILE);
    
    stream.pipe(res)
});


module.exports = app;