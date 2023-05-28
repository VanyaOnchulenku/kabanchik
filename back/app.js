const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

const db = mysql.createConnection ({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'schema'
})



app.get('/orders', (req, res) => {
    const q = 'SELECT * FROM orders'
    db.query(q,(err,data) =>{
        if(err)
        return err
        res.send('Waka-waka e e ')
    })
} )

app.get('/suggestions', (req, res) => {
    const q = 'SELECT * FROM suggestions'
    db.query(q,(err,data) =>{
        if(err)
        return err
        res.send('Wherever whenever ')
    })
} )





app.listen(3000, () => {
console.log('Everybody dance now')
})