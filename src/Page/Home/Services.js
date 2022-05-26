import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [product,setProduct] = useState ([])
    useEffect( () =>{
        fetch('https://fathomless-mountain-04571.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    
    return (
        <div>
            <h1 className="text-3xl text-center font-bold mb-14">Product</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 justify-items-center">
                {
                    product.map(product =><Service key={product._id} product={product}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;