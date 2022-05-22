import React from 'react';

const Revew = ({review}) => {
    const {name,img,revew,reting} = review;
    return (
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{revew}</p>
                    <p>{reting}</p>
                    <div className="card-actions justify-end">
                   
                    </div>
                </div>
            </div>
    );
};

export default Revew;