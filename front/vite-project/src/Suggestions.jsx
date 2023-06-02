import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Suggestions() {

    const [sug, setSug] = useState([])

    useEffect(() => {
        const fetchSuggs = async () => {
            try{
                const res = await axios.get('http://localhost:3000/suggestions')
                setSug(res.data)
            } catch(err) {
            console.log(err)
            }
        }

        fetchSuggs()

    }, [])




  return (
    <div>
        <button> <Link to ='/'> Home </Link> </button>
        <h1> Here you can see all the availiable sugestions </h1>
        <div> {sug.map(sug => (
            <div className = 'list' key = {sug.sugID}>
                <ul>
                <h1>{sug.title}</h1>
                <li>{sug.desc}</li>
                <li>{sug.need}</li>
                <li>{sug.userID}</li>
                <span>Price: {sug.price}$</span>
                </ul>
                <br />
                <button>Accept</button>
             </div>
        ))}  

        </div>

    </div>
  )
}
