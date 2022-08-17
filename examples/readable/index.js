const fs = require('fs')

const readStream = fs.createReadStream('./examples/readable/doguinho.png', );

// Realiza via EventLoop
readStream.on('data', (data)=>{
    console.log(data)
});
