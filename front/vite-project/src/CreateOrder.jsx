import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import axios from 'axios'
import { useState} from 'react'


export default function CreateOrder() {

  const [order, setOrder] = useState({
    title : '',
    desc : '',
    need : '',
    price : null
  })

  const sendOrder = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3000/create', order)
    } catch(err) {
    console.log(err)
    }   

  }

  const handleChange = (e) => {
    const order = e.target
    setOrder(prevOrder => {
      return {
        ...prevOrder,
        [order.name] : order.value
      }
    } )
}



  return (
    <div className='CreateOrder'>
      <button> <Link to ='/'> Home </Link> </button>
        <h1>Insert Info</h1>
        <input type="text" placeholder='Title' name = 'title' onChange = {handleChange} />
        <input type="text" placeholder='Desc' name = 'desc' onChange = {handleChange} />
        <input type="text" placeholder='Requierments' name = 'need' onChange = {handleChange} />
        <input type="number" placeholder='Price' name = 'price' onChange = {handleChange} />
        <button onClick={sendOrder}> <Link to = '/orders'> Create order  </Link> </button>


    </div>
  )
}
