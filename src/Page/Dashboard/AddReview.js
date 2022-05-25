import React from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit =async data => {
        console.log(data)
        const url = `http://localhost:5000/revew`
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(results=>{
            console.log(results)
        })
    };

     
    return (
        <div className="mt-10">
            <h1 className='text-4xl font-bold'>Add A new revew Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                        <label class="label">
                        <span class="label-text">description</span>
                            
                        </label>
                        <input type="text" placeholder="description" class="input input-bordered w-full max-w-xs" 
                        {...register("description", {
                            required:{
                                value:true,
                                message:'description is required',
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
                        <span class="label-text">ratings</span>
                            
                        </label>
                        <input type="number" placeholder="ratings" class="input input-bordered w-full max-w-xs" 
                        {...register("ratings ", {
                            required:{
                                value:true,
                                message:'ratings  is required',
                            },
                           
                          })}
                        />
                        

                        
                        

                      
                        </div>   
                        <input/>
                        
                       
                        
                       
                        
                        <button class="btn btn-secondary mt-1">Add Revew</button>
                        </form>
        </div>
    );
};

export default AddReview;