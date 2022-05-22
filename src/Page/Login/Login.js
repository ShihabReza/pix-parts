import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loding from './Loding';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate()
      let userErorr
      if(loading || gLoading){
        return <Loding></Loding>
      }
      if(error || gError){
        userErorr=<p>{error?.message || gError?.message}</p>
      }
    if(gUser || gUser){
        console.log(user || gUser)
    }
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
        navigate('/Purchase')
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title mx-auto text-3xl font-bold">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                        <label class="label">
                        <span class="label-text">Email</span>
                            
                        </label>
                        <input type="email" placeholder="Plese inter your email" class="input input-bordered w-full max-w-xs" 
                        {...register("email", {
                            required:{
                                value:true,
                                message:'email is required',
                            },
                            pattern: {
                              value: /[A-Za-z]{3}/,
                              message: 'provide is valid email' 
                            }
                          })}
                        />
                        

                        <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            
                            
                        </label>
                        </div>   
                        <div class="form-control w-full max-w-xs">
                        <label class="label">
                        <span class="label-text">Password</span>
                            
                        </label>
                        <input type="password" placeholder="Plese inter your password" class="input input-bordered w-full max-w-xs" 
                        {...register("password", {
                            required:{
                                value:true,
                                message:'password is required',
                            },
                            minLength: {
                              value: 6,
                              message: 'must be at least 6 charactersis' 
                            }
                          })}
                        />
                        

                        <label class="label">
                        {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            
                            
                        </label>
                        </div>   
                        <input/>
                        
                       
                        
                       
                        {userErorr}
                        <button class="btn btn-secondary w-full">Login</button>
                        </form>
                        <p>Not a member? <Link className='text-blue-400' to="/singUp">SingUp</Link></p>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-secondary ">Continue with Google</button>
                    </div>
                </div>
        </div>
    );
};

export default Login;