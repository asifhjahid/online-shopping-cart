import React,{useState} from 'react'
import ProductItems from '../ProductItems/ProductItems'
import DataSet from '../../Dataset/Dataset'
import ProductCard from '../ProductCard/ProductCard'
import './ProductShop.css'

export default function ProductShop() {
    const [allData, setAllData] = useState(DataSet);
    const [card, setCard]= useState([]);

    const buttonChange=((data)=>{
        const newCard = [...card,data];
        setCard(newCard);
    })
    
   
    
    return (
        <div className='shopData'>
            <div className='product_container'>
                {
                    allData.map((data)=>(
                        <ProductItems data={data} buttonChange={buttonChange} />
                    ))
                }
            </div>
            <div className='enroll_container'>
                <ProductCard card={card} />
            </div>
        </div>
    )
}
