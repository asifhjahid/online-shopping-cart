import React from 'react'
import './ProductItems.css'
import { Button } from 'react-bootstrap';


export default function ProductItems({data,buttonChange}) {
    console.log(data.img);
    
    return (
        <div className='allItems'>
            <div>
                <img src={data.img} alt='' />
            </div>
            <div className='items'>
                <h1>Name: <span>{data.name}</span> </h1>
                <h2>Code: {data.code}</h2>
                <h2>Size: {data.size}</h2>
                <h2>Price: {data.price}</h2>
                
                <Button  variant="warning" onClick={()=>(buttonChange(data))}>Enroll Now</Button>
               
            </div>
           
        </div>
    )
}
