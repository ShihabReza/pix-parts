import React from 'react';
import { useCreateUserWithEmailAndPassword,  useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loding from './Loding';

const SingUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const navigate = useNavigate()

      const [updateProfile, updating, updeteEerror] = useUpdateProfile(auth);
      let userErorr
      if(loading || gLoading || updating){
        return <Loding></Loding>
      }
      if(error || gError || updeteEerror){
        userErorr=<p>{error?.message || gError?.message || updeteEerror?.message}</p>
      }
    if(gUser || gUser){
        console.log(user || gUser )
    }
    const onSubmit =async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName:data.name});
        navigate('/')
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title mx-auto text-3xl font-bold">Sing Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                        <label class="label">
                        <span class="label-text">Name</span>
                            
                        </label>
                        <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" 
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
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                        {errors.name?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            
                            
                        </label>
                        </div> 
                        <div class="form-control w-full max-w-xs">
                        <label class="label">
                        <span class="label-text">Email</span>
                            
                        </label>
                        <input type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs" 
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
                        <input type="password" placeholder="Your Password" class="input input-bordered w-full max-w-xs" 
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
                        <button class="btn btn-secondary w-full">Sing Up</button>
                        </form>
                        <p>Alreday have an acount? <Link className='text-blue-400' to="/login">Plese Login</Link></p>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-secondary ">Continue with Google</button>
                    </div>
                </div>
        </div>
    );
};

export default SingUp;