import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Assets/Logo/logo.svg'
import { AuthProvider } from '../../../Firebase/AuthContext';

const Header = () => {
  const {user,signout}=useContext(AuthProvider)
    const meunItems=<>
    <li><Link to='/' className='text-xl font-medium'>Home</Link></li>
    <li><Link to='/menus' className='text-xl font-medium'>service</Link></li>
    <li><Link to='/orderlist' className='text-xl font-medium'>Order</Link></li>
    <li><Link to='/myreview' className='text-xl font-medium'>My Review</Link></li>
    <li><Link to='/blog' className='text-xl font-medium'>Blog</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
  <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {meunItems}
      </ul>
    </div>
    <Link to='/'><img style={{height:'80px',width:'107px'}} src={img} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {meunItems}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?.uid ? <Link ><button onClick={signout} className="btn  btn-outline btn-error mr-2">Sign Out</button></Link>:<Link to='/signin'><button className="btn  btn-outline btn-success mr-2">Sign In</button></Link>
    }
    
    
  </div>
</div>
    );
};

export default Header;