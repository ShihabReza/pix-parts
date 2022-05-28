import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders,setOrders] = useState ([])
    useEffect( ()=>{
      if(user){
        fetch(`https://fathomless-mountain-04571.herokuapp.com/booking?email=${user.email}`)
        .then(res=>res.json())
        .then(data =>setOrders(data))
      }
    },[user])
    return (
        <div>
            <h1 className='text-2xl text-center font-bold mt-2 mb-2'>My Orders {orders.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr className='text-center font-bold text-2xl'>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>phone</th>
        
        <th>Quantity</th>
        
        
      </tr>
    </thead>
    <tbody>
        {
            orders.map(order =>
                <tr className='text-center w-full'>
                  <th>*</th>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.phone}</td>
                  
                  <td>{order.Quantity}</td>
                 
                  
                </tr>)
        }
    
     
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default MyOrders;