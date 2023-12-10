module.exports = function (){
    const fs = require('fs');
    const path = require("path")

    let result = {}
    const files = fs.readdirSync("src/callbacks")

    files.forEach(file => {
        const filename = file.slice(0, file.length-3)
        const filepath = path.join(__dirname, "callbacks", filename)
        const curCallback = require(filepath)
        
        result[filename] = curCallback
    })

    return result
}