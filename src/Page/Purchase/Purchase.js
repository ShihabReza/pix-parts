import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit =async data => {
        console.log(data)
        
        
    };
    const [user, loading, error] = useAuthState(auth);
    const {id} = useParams ()
    
    const [product,setProduct] = useState ({})
    useEffect(()=>{
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
        
        
        
    },[])
    return (
        <div className='flex'>
            <div className="card w-96 ml-8 shadow-xl flex ">
        <figure><img src={product.img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title font-bold">{product.name}</h2>
            <p>{product.description}</p>
            <p className='text-xl font-bold'>Minimum Quantity : {product.minimumOrderQuantity}</p>
            <p className='text-xl font-bold'>Available Quantity : {product.availableQuantity}</p>
            <p className='text-2xl font-bold'>${product.price}</p>

            
        </div>
       
            </div>
            <div className='w-50 mx-auto mt-40'>
            <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                        <label class="label">
                        <span class="label-text">name</span>
                            
                        </label>
                        <input type="text" placeholder="name" class="input input-bordered w-full max-w-xs" 
                        {...register("name", {
                            required:{
                                value:true,
                                message:'name is required',
                            },
                            // pattern: {
                            //     value: /[A-Za-z]{3}/,
                            //     message: 'provide is valid email' 
                            //   }
                          })}
                        />

                        

                        
                        

                        <label class="label">
                        {errors.description?.type === 'description' && <span class="label-text-alt text-red-500">{errors.description.message}</span>}
                        {errors.description?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.description.message}</span>}
                            
                            
                        </label>
                        </div> 

                        <div class="form-control w-full max-w-xs">
                        <label class="label">
                        <span class="label-text">email</span>
                            
                        </label>
                        <input type="email" placeholder="email" class="input input-bordered w-full max-w-xs" 
                        {...register("email", {
                            required:{
                                value:true,
                                message:'email is required',
                            },
                            // pattern: {
                            //     value: /[A-Za-z]{3}/,
                            //     message: 'provide is valid email' 
                            //   }
                          })}
                        />

                        

                        
                        

                        <label class="label">
                        {errors.email?.type === 'description' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            
                            
                        </label>
                        </div> 

                        <div class="form-control w-full max-w-xs">
                        <label class="label">
                        <span class="label-text">phone</span>
                            
                        </label>
                        <input type="phone" placeholder="description" class="input input-bordered w-full max-w-xs" 
                        {...register("phone", {
                            required:{
                                value:true,
                                message:'phone is required',
                            },
                            // pattern: {
                            //     value: /[A-Za-z]{3}/,
                            //     message: 'provide is valid email' 
                            //   }
                          })}
                        />

                        

                        
                        

                        <label class="label">
                        {errors.description?.type === 'phone' && <span class="label-text-alt text-red-500">{errors.phone.message}</span>}
                        {errors.description?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.phone.message}</span>}
                            
                            
                        </label>
                        </div> 
                        <div class="form-control w-full max-w-xs">
                        <label class="label">
                        <span class="label-text">quantity</span>
                            
                        </label>
                        <input type="number" placeholder="quantity" min={product.minimumOrderQuantity} max={product.availableQuantity} class="input input-bordered w-full max-w-xs" 
                        {...register("ratings ", {
                            required:{
                                value:true,
                                message:'ratings  is required',
                            },
                           
                          })}
                        />
                        

                        
                        

                      
                        </div>   
                        <input/>
                        
                       
                        
                       
                        
                        <button class="btn btn-secondary mt-2">Purchase</button>
                        </form>
            </div>
        </div>
       
    );
};

export default Purchase;