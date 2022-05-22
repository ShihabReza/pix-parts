import React from 'react';

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
                <button className="btn btn-primary w-full">book now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;