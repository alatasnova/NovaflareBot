const mysql = require("mysql")

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"novaflare",
    password:"root"
})

conn.connect(err => {
    if(err) return console.error(err)
})

console.log("Database connected!")

module.exports.getUserById = ()=>{
    return new Promise(resolve=>{
        const query = `SELECT * FROM \`pending_orders\``
        conn.query(query, (err, result)=>{
            if(err) console.log(err)
            resolve(result)
        })
    })
} 

module.exports.addOrder = (fromId, date)=>{
    return new Promise(resolve=>{
        //INSERT INTO `pending_orders`(`user_id`, `order_date`) VALUES (123452323, "3")
        //INSERT INTO `pending_orders`(`user_id`, `order_date`) VALUES (5765873937, `10/12/2023 13:16:45`)

        const query = `INSERT INTO \`pending_orders\`(\`user_id\`, \`order_date\`) VALUES (${fromId}, NOW())`
        console.log(query)
        conn.query(query, (err, result)=>{
            if(err) console.log(err)
            resolve(result)
        })
    })
}