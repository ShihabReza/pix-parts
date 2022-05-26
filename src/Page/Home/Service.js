import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({product}) => {
    const {name,img,description,minimumOrderQuantity,availableQuantity,price,_id} = product
    const navigate = useNavigate()
    const hendelButton = id =>{
    
        navigate(`/Purchase/${id}`)
        console.log(id)
        
    }
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
                
                <Link style={{border: '1px solid black', backgroundColor:'#111430',color:'white',padding:'15px',width:'100%', textAlign:'center',borderRadius:'5px',}} to={`/Purchase/${_id}`}>Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;