import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    
    const {id} = useParams ()
    
    const [product,setProduct] = useState ({})
    useEffect(()=>{
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
        
        
        
    },[id])
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={product.img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title font-bold">{product.name}</h2>
            <p>{product.description}</p>
            <p className='text-xl font-bold'>Minimum Quantity : {product.minimumOrderQuantity}</p>
            <p className='text-xl font-bold'>Available Quantity : {product.availableQuantity}</p>
            <p className='text-2xl font-bold'>${product.price}</p>

            
        </div>
    </div>
       
    );
};

export default Purchase;