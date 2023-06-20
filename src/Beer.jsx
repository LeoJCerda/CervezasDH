//import React, { useState } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
    const [beer, setBeer] = useState([])
   

    const params = useParams()
    const navigate = useNavigate()

    console.log(beer)
    
    const getBeer = async()=>{
        //Deberas completar este fetch con el parametro correspondiente
        const res = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
        const data = await res.json()
        setBeer(data[0])
    }

    useEffect(()=>{
        getBeer()
    },[])

    
   
  
  
  return (
    <div>
        <h2>Cerveza numero...{beer.id}</h2>
        <div className='card'>
            <img src={beer.image_url} alt="beer-detail" />
            <p>Nombre:{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips} </p>
            <p>IBU {beer.ibu}</p>
            
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>

  )
}

export default Beer