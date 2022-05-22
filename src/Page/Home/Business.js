import React from 'react';
import Businesses from './Businesses';
import country from '../../Img/Icon/earth-africa-solid.svg';
import client from '../../Img/Icon/users-line-solid.svg'
import projrct from '../../Img/Icon/table-list-solid.svg'

const Business = () => {
    const business = [
        {
            _id:1,
            img: country ,
            number: '100+',
            name:'country'
        },
        {
            _id:2,
            img: client,
            number: '120M+',
            name:'customers'
        },
        {
            _id:3,
            img:projrct,
            number: '33K+',
            name:'happy client'
        },
       
    ]
    
    return (
        <div>
            <h1 className='text-3xl text-center font-bold mt-10'>Our Servise</h1>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10 justify-items-center bg-accent mt-14'>
           {
                business.map(business=><Businesses key={business._id} business={business}></Businesses>)
            }
           </div>
        </div>
    );
};

export default Business;