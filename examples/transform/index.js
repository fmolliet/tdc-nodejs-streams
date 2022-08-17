const fs = require('fs')
const es = require('event-stream')

const readStream = fs.createReadStream('./examples/transform/logs.json', );

const JSONStream = require('JSONStream')

// via piping
readStream
        .pipe(JSONStream.parse('logs.*'))
        .pipe(
            es.mapSync(function (data) {
                if (data.status === "ERROR" && data.critical === true){
                    // Rest API Call
                    console.log(data);
                    return data;
                }

            })
        );
