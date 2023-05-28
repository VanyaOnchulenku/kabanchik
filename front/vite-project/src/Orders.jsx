import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Orders() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchOrders = async () => {
            try{ 
                const res = await axios.get('http://localhost:3000/orders')
                setOrders(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchOrders()

    }, [] )






  return (
    <>
    <button> <Link to ='/'> Home </Link> </button>
        <h1>Welcome, here you can see list of all orders</h1>
        <div> {orders.map(order => ( 
            <div className = 'list' key = {order.id}>
                <ul>
                <h2>{order.title}</h2>
                <li>{order.desc}</li>
                <li>{order.need}</li>
                <span>Price: {order.price}$</span> 
                </ul>
                <br />
                <button> Accept </button>
            </div>
         ))}
        </div>
    </>
  )
}
