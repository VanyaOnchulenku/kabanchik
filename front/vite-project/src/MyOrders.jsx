import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function MyOrders() {

    const [orders, setOrders] = useState([])

    const id = useParams()

    useEffect(() => {
        const fetchOrders = async () => {
            try{ 
                const res = await axios.get('http://localhost:3000/myorders/'+id)
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
        <div> {orders.map(order => ( 
            <div className = 'list' key = {order.orderID}>
                <ul>
                <h2>{order.title}</h2>
                <li>{order.desc}</li>
                <li>{order.need}</li>
                <li>{order.userID}</li>
                <span>Price: {order.price}$</span> 
                </ul>
            </div>
         ))}
        </div>
        </>
    );
}

export default MyOrders
