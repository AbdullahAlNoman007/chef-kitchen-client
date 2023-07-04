import React from 'react';
import img from '../../Assets/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthProvider } from '../../Firebase/AuthContext';
import useTitle from '../Share/Hook/Hook';

const SignUp = () => {
    const {signup,googlesignin}=useContext(AuthProvider)
    useTitle("Sign UP")
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleSubmit=(event)=>{
        event.preventDefault()
        const form = event.target
        const email=form.email.value
        const password =form.password.value
        signup(email,password)
        .then(result=>{
            const user=result.user
            console.log(user)
            navigate(from, { replace: true });
        })
        .catch(err=>console.log(err))
    }
    const handleGoogle=(event)=>{
        event.preventDefault()
        googlesignin()
        .then(result=>{
            const user=result.user
            console.log(user)
           navigate(from, { replace: true });
        })
        .catch(err=>console.error(err))
        
    }
    return (
        <div className="hero w-full">
        <div className="hero-content  grid md:grid-cols-2">
            <div className="text-center lg:text-left">
            <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                <button type='submit' value="login" className="btn btn-primary">Sign Up</button>
                </div>
                <p className='text-center py-3'>Already have an account <Link className='text-orange-600' to='/signin'>Sign in</Link></p>
                <hr />
                <div className="form-control my-4 ">
                <button onClick={handleGoogle} className="btn btn-success"><FcGoogle className='text-3xl mx-2'/> Continue With Google</button>
                </div>
            </form>
            </div>
        </div>
</div>
    );
};

export default SignUp;