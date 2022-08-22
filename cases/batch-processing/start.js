const fs = require('fs');
const { PassThrough } = require("stream");
const criticalEventsProcessor = require('./CriticalEventsProcessor');
const resultProcessor = require('./ResultProcessor');

const readStream = fs.createReadStream('./examples/transform/logs.json');


readStream
        .pipe(PassThrough)
        .pipe(criticalEventsProcessor)
        .pipe(resultProcessor);
        
        
        
        
        