import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'


export default function CreateOrder() {
  return (
    <div className='CreateOrder'>
        <h1>Insert Info</h1>
        <input type="text" placeholder='Title' />
        <input type="text" placeholder='Desc' />
        <input type="text" placeholder='Requierments' />
        <input type="number" placeholder='Price' />
        <button> <Link to = '/orders'> Create order  </Link> </button>


    </div>
  )
}
