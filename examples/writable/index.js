const fs = require('fs')

const readStream = fs.createReadStream('./examples/writable/doguinho.png', );
const writeStream = fs.createWriteStream('./examples/writable/clone.png')

// Realiza via piping
readStream.pipe(writeStream)
