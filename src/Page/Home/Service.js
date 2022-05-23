import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({product}) => {
    const {name,img,description,minimumOrderQuantity,availableQuantity,price} = product
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p>{description}</p>
                <p className='text-xl font-bold'>Minimum Quantity : {minimumOrderQuantity}</p>
                <p className='text-xl font-bold'>Available Quantity : {availableQuantity}</p>
                <p className='text-2xl font-bold'>${price}</p>

                <div className="card-actions justify-end">
                
                <Link className='w-full' to="/Purchase"><button className="btn btn-secondary w-full">book now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;