import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Sleep2() {
    const[dat, setdat] = useState([]);
    useEffect(()=>{
        axios.get("'https://fakestoreapi.com/products").then(
            // resp=>console.log(resp.data)
            resp=>setdat(resp.data)
        )
        .catch(error=> console.log(error))
    })
  return (
    <>
    {
        dat.map((item, id)=>{
           return <p key={id}>{item.name}</p>
        })
    }
    </>
  )
  
}
export default Sleep2