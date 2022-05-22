import React from 'react';

const Businesses = ({business}) => {
    const {name,img,number} = business;
    return (
        <div className="card w-96 mt-14 text-white">
        <figure><img style={{width:'100px',color:'#FFFFFF'}} src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold mx-auto">{number}</h2>
          <p className='text-3xl text-center font-bold'>{name}</p>
          <div className="card-actions justify-end">
           
          </div>
        </div>
      </div>
    );
};

export default Businesses;