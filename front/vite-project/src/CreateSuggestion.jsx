import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function CreateSuggestion() {
  return (
    <div className='CreateOrder'>
        <h1>Add Data</h1>
        <input type="text" placeholder='Title' />
        <input type="text" placeholder='Desc' />
        <input type="text" placeholder='Requierments' />
        <input type="number" placeholder='Price' />
        <button> <Link to = '/suggestions'> Leave suggestion  </Link> </button>
    </div>
  )
}
