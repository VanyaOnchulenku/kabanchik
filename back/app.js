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


app.post('/create', (req, res) => {
    const order = req.body
    const q = 'INSERT INTO orders (`title`, `desc`, `need`, `price`) VALUES (?) '
    const values = [order.title, order.desc, order.need, order.price]
    db.query(q, [values], (err, data) => {
        if (err)
        return res.send(err)
        res.send('Order created')
    })
} )

app.post('/add', (req, res) => {
    const sug = req.body
    const q = 'INSERT INTO suggestions (`title`, `desc`, `need`, `price`) VALUES (?)'
    const values = [sug.title, sug.desc, sug.need, sug.price]
    db.query(q, [values], (err, data) => {
        if (err)
        return res.send(err)
        res.send('Suggestion added')
    })
})





app.listen(3000, () => {
console.log('Everybody dance now')
})