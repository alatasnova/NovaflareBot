module.exports = function (){
    const fs = require('fs');
    const path = require("path")

    let result = []
    const files = fs.readdirSync("src/commands")

    files.forEach(file => {
        const filename = file.slice(0, file.length-3)
        const filepath = path.join(__dirname, "commands", filename)
        const curCommand = require(filepath)
        
        result.push(
            {
                command: filename,
                action: curCommand.action,
                description: curCommand.description
            }
        )  
    })

    return result
}