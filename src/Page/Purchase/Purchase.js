import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit =async data => {
        // console.log(data)
        
       const booking = {
           userId : user.id,
           name: user.displayName,
           email: user.email,
           address: data.address,
           phone: data.phone,
           Quantity:data.quantity
          
       }
        
        fetch("https://fathomless-mountain-04571.herokuapp.com/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(booking),
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.success){
            toast('Success Your Purchase')
        }
    })
    };

   
    

   
    const {id} = useParams ()
    
    const [product,setProduct] = useState ({})
    useEffect(()=>{
        const url = `https://fathomless-mountain-04571.herokuapp.com/product/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
        
       
        
    },[id])

    


    // const handleSubmit =(event)=>{
    //     event.preventDefault();

       

    //     const booking = {
        
    //         productId: product._id,
    //         productName:product.name,
    //         userName: user.displayName,
    //         userEmail: user.email,
    //         address: event.target.address.value,
    //         phone: event.target.phone.value,
           
    //       };
    //       console.log(booking);
    // fetch("https://fathomless-mountain-04571.herokuapp.com/booking", {
        //     method: "POST",
        //     headers: {
        //       "content-type": "application/json",
        //     },
        //     body: JSON.stringify(booking),
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        // })
      
// }

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
                        <input type="text" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" 
                        {...register("name")}
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
                        <input type="email"disabled value={user?.email} class="input input-bordered w-full max-w-xs" 
                        {...register("email"
                           )}
                        />


                        <label class="label">
                        {errors.email?.type === 'description' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            
                            
                        </label>
                        </div> 

                        <div class="form-control w-full max-w-xs">
                        <label class="label">
                        <span class="label-phone">phone</span>
                            
                        </label>
                        <input type="tel" value={user?.phone} class="input input-bordered w-full max-w-xs" 
                        {...register("phone" )}
                        />


                        <label class="label">
                        {errors.description?.type === 'phone' && <span class="label-phone-alt text-red-500">{errors.phone.message}</span>}
                        {errors.description?.type === 'pattern' && <span class="label-phone-alt text-red-500">{errors.phone.message}</span>}
                            
                            
                        </label>
                        </div> 
                        
                        <div class="form-control w-full max-w-xs">
                        <label class="label">
                        <span class="label-text">Address</span>
                            
                        </label>
                        <input type="text" value={user?.address} class="input input-bordered w-full max-w-xs" 
                        {...register("address" )}
                        />


                        <label class="label">
                        {errors.description?.type === 'Address' && <span class="label-text-alt text-red-500">{errors.Address.message}</span>}
                        {errors.description?.type === 'Address' && <span class="label-text-alt text-red-500">{errors.Address.message}</span>}
                            
                            
                        </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                        <label class="label">
                        <span class="label-text">quantity</span>
                            
                        </label>
                        <input type="number" placeholder="quantity" min={product.minimumOrderQuantity} max={product.availableQuantity} class="input input-bordered w-full max-w-xs" 
                        {...register("quantity", )}
                        />
                        
                      
                        </div>   
                        <input/>
                        
                        <button class="btn btn-secondary mt-2">Purchase</button>
                        </form>
                        <ToastContainer />
            </div>
        </div>
       
    );
};

export default Purchase;