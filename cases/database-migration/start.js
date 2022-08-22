// start read stream JSON
const fs = require('fs');
const { PassThrough } = require("stream");

// Download file
const readStream = fs.createReadStream('./cases/database-migration/server/file.dat' );
// Update JSON
const updateStream = new PassThrough();

updateStream.on('data', (chunk)=>{
    // post Update API
    // Log data
    console.log("bytes:", chunk);
})

// Upload file
const writeStream = fs.createWriteStream('./cases/database-migration/cloud/file.dat')


// Execute pipe
readStream.pipe(updateStream).pipe(writeStream);