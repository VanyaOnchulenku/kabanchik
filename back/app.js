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

app.get('/users', (req, res) => {
    const q = 'SELECT * FROM users'
    db.query(q, (err, data) => {
        if(err)
        return err
        res.send(data)
    })
})

app.get('/orders', (req, res) => {
    const q = 'SELECT * FROM orders'
    db.query(q,(err,data) =>{
        if(err)
        return err
        res.send(data)
    })
} )

app.get('/bids', (req, res) => {
    const q = 'SELECT * FROM bids'
    db.query(q,(err,data) =>{
        if(err)
        return err
        res.send(data)
    })
} )

app.get('/orders/:id', (req, res) => {
    const userID = req.params.id
    const q = 'SELECT * FROM orders WHERE userID = ?'
    db.query(q, [userID], (err, data) => {
        if(err)
        return res.send(err)
        res.send(data)
    } )
})

app.get('/bids/:id', (req, res) => {
    const userID = req.params.id
    const q = 'SELECT * FROM bids WHERE userID = ?'
    db.query(q, [userID], (err, data) => {
        if(err)
        return res.send(err)
        res.send(data)
    })
})

app.get('/orderbids/:id', (req, res) => {
    const userID = req.params.id
    const q = 'SELECT * FROM bids WHERE orderID = ?'
    db.query(q, [userID], (err, data) => {
        if(err)
        return res.send(err)
        res.send(data)
    })
})

app.post('/user', (req, res) => {
    const user = req.body
    const q = 'INSERT INTO users ( `name`, `age`, `city`) VALUES (?)'
    const values = [user.name, user.age, user.city]
    db.query(q, [values], (err, data) => {
        if(err)
        res.send(err)
        res.send('UserCreated!')
    })
})


app.post('/order', (req, res) => {
    const order = req.body
    const q = 'INSERT INTO orders (`title`, `desc`, `need`, `price`, `userID`) VALUES (?) '
    const values = [order.title, order.desc, order.need, order.price, order.userID]
    db.query(q, [values], (err, data) => {
        if (err)
        return res.send(err)
        res.send('Order created')
    })
} )

app.post('/bid', (req, res) => {
    const bid = req.body
    const q = 'INSERT INTO bids (message, price, userID, orderID) VALUES (?)'
    const values = [bid.message, bid.price, bid.userID, bid.orderID]
    db.query(q, [values], (err, data) => {
        if (err)
        return res.send(err)
        res.send('bid added')
    })
})

app.delete('/order/:id', (req, res) => {
    const orderID = req.params.id
    db.query('DELETE FROM orders WHERE orderID = ?', orderID, (err, data) => {
        if (err)
        return err
        res.send('Order deleted')
    })
})

app.delete('/bid/:id', (req, res) => {
    const bidID = req.params.id
    db.query('DELETE FROM bids WHERE bidID = ?', bidID, (err, data) => {
        if (err)
        return err
        res.send('Bid deleted')
    })
})

app.put('/bid/:id', (req, res) => {
    const bidID = req.params.id
    const bid = req.body
    const q = "UPDATE bids SET message = ?, price = ?, userID = ?, orderID = ? WHERE bidID = ?"
    const values = [bid.message, bid.price, bid.userID, bid.orderID]
    db.query(q,[...values, bidID], (err, data) => {
        if(err)
        return err
        res.send('Bid updated')
    })
})


app.put('/order/:id', (req, res) => {
    const orderID = req.params.id
    const order = req.body
    const q = 'UPDATE orders SET `title` = ?, `desc` = ?, `need` = ?, `price` = ?, `userID` = ? WHERE orderID = ?'
    const values = [order.title, order.desc, order.need, order.price, order.userID]
    db.query(q, [...values, orderID], (err, data) => {
        if(err)
        return err
        res.send('Pechilnik')
    })
})


app.post('/producers/response', (req, res) => {
    const resp = req.body
    const q = 'INSERT INTO producers (producerID, response, customerID, mark) VALUES(?)'
    const values = [resp.producerID, resp.response, resp.customerID, resp.mark]
    db.query(q, [values], (err, data) => {
        if(err)
        return err
        res.send('Response added')
    })
})
app.post('/customers/response', (req, res) => {
    const resp = req.body
    const q = 'INSERT INTO customers (customerID, response, producerID, mark) VALUES(?)'
    const values = [resp.customerID, resp.response, resp.producerID, resp.mark]
    db.query(q, [values], (err, data) => {
        if(err)
        return err
        res.send('Response added')
    })
})


app.get('/producers/response', (req, res) => {
    const q = 'SELECT * FROM producers'
    db.query(q, (err, data) => {
        if(err)
        return err
        res.send(data)
    })
})


app.get('/customers/response', (req, res) => {
    const q = 'SELECT * FROM customers'
    db.query(q, (err, data) => {
        if(err)
        return err
        res.send(data)
    })
})



app.listen(3000, () => {
console.log('Everybody dance now')
})