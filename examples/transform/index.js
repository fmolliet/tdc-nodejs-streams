const fs = require('fs')
const es = require('event-stream')

const readStream = fs.createReadStream('./examples/transform/logs.json', );
const writeStream = fs.createWriteStream('./examples/transform/results.json')

const JSONStream = require('JSONStream')

// via piping
readStream
        .pipe(JSONStream.parse('logs.*'))
        .pipe(
            es.mapSync(function (data) {
                console.log(data);
                return data;
            })
        );
