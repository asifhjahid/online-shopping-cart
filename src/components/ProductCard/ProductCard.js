import React from 'react'
import { Button } from 'react-bootstrap';
import './ProductCard.css'


export default function ProductCard({card}) {
    const totalItemPrice = card.reduce((sum,data)=>sum + data.price , 0)
    const vat =  totalItemPrice /10;
    return (
        <div>
            <h1 className='orderStyle'>Order Description</h1>
            <h1 className='oderItem'>Total Order items : {card.length}</h1>
            <p> Product Price : {totalItemPrice}</p>
            <p>Vat : {vat}</p>
            <p>Total Price : {totalItemPrice + vat}</p>
            
            <Button className='cardBtn' variant="success">Please Order</Button>
            
            
        </div>
    )
}
