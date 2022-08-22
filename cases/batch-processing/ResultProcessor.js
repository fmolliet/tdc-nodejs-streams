const { Transform } = require('stream');

class ResultProcessor extends Transform {
    
    async _transform(chunk, encoding, callback){
        const criticalLogs = JSON.parse(chunk.toString());
        
        
        for await (const log of criticalLogs ){
            
            console.log(log)
            // Valida o log.data ...e envia para um analisador
        }
        
        callback(null, chunk);
    }
}

module.exports = new ResultProcessor();