const { Transform } = require('stream');

class CriticalEventsProcessor extends Transform {
    
    async _transform(chunk, encoding, callback){
        const logs = JSON.parse(chunk).logs;
        
        const criticalEvents = [];
        
        for await (const log of logs ){
            
            if (log.status === 'ERROR' ){
                criticalEvents.push(log);
            }
        }
        const newChunk = Buffer.from(JSON.stringify(criticalEvents));
        callback(null, newChunk );
    }
}

module.exports = new CriticalEventsProcessor();