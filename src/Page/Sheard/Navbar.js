import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState} from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = ({children}) => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () =>{
    signOut(auth)
  }
    const menuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/Purchase'>Purchase</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
   
    {user && <li><Link to='/Dashbord'>Dashbord</Link></li>}
    <li><Link to='/about'>About Me</Link></li>
    <li>{user?<button onClick={logout} class="btn btn-outline">Logout</button>
 :<Link to='/Login'>Login</Link>}</li>
  </>
    return (
        <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    
    <div className="w-full navbar bg-secondary text-white">
      <div className="flex-none lg:hidden">
        <label for="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2 font-bold text-2xl">Pix<span className='text-primary'>Parts</span></div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
         {menuItems}
        </ul>
      </div>
    </div>
    {children}
  </div> 
  <div className="drawer-side">
    <label for="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
      
     {menuItems}
      
    </ul>
    
  </div>
</div>
    );
};

export default Navbar;