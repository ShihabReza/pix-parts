import React from 'react';

const Businesses = ({business}) => {
    const {name,img,number} = business;
    return (
        <div class="card w-96 mt-14 ">
        <figure><img style={{width:'100px'}} src={img} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title text-4xl font-bold mx-auto">{number}</h2>
          <p className='text-3xl text-center font-bold'>{name}</p>
          <div class="card-actions justify-end">
           
          </div>
        </div>
      </div>
    );
};

export default Businesses;