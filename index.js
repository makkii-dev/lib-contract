const aion = require('./types/aion.js')

function decode(type, data){
    switch(type){
        case 'aion':
            return aion.decode(data)
        default:
            return {}
    }
}

module.exports = {
    decode
}