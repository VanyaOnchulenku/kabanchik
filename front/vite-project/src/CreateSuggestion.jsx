import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { useState } from 'react'
import axios from 'axios'

export default function CreateSuggestion() {
  
  const [sug,setSug] = useState({
    title : '',
    desc : '',
    need : '',
    price : null
  })

  const sendSug = async e => {
    e.preventDefault()
    try{ 
      await axios.post('http://localhost:3000/add', sug)
    }catch(err){
      console.log(err)
    }
  }

  const handleChange = e => {
    const sug = e.target
    setSug(prevSug => {
      return{ 
        ...prevSug,
        [sug.name] : sug.value
      }
    })
  }


  return (
    <div className='CreateOrder'>
      <button> <Link to ='/'> Home </Link> </button>
        <h1>Add Data</h1>
        <input type="text" placeholder='Title' name='title' onChange={handleChange} />
        <input type="text" placeholder='Desc' name='desc' onChange={handleChange} />
        <input type="text" placeholder='Requierments' name='need' onChange={handleChange} />
        <input type="number" placeholder='Price' name='price' onChange={handleChange} />
        <button onClick={sendSug}> <Link to = '/suggestions'> Post suggestion  </Link> </button>
    </div>
  )
}
