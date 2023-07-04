import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthProvider } from '../../../../Firebase/AuthContext';
import useTitle from '../../../Share/Hook/Hook';
import Comment from '../Comment';

const MyReview = () => {
    const {user}=useContext(AuthProvider)
    const name = user?.displayName?.split(" ")[0].toLowerCase()
    const [myreview,setMyreview]=useState([])
    useTitle("My Review")
    useEffect(()=>{
        fetch(`https://chef-kitchen-server.vercel.app/mycomments?name=${name}`)
        .then(res=>res.json())
        .then(data=>{
           setMyreview(data)
        })
    },[name])
    const handlemyreview=(event)=>{
        event.preventDefault()
        const form =event.target
        const name =form.name.value
        fetch(`https://chef-kitchen-server.vercel.app/mycomments?name=${name}`)
        .then(res=>res.json())
        .then(data=>{
           setMyreview(data)
        })
       
    }
    return (
        <div className='bg-white m-5 p-5 rounded-xl h-fit w-full'>
            <h1 className='text-3xl'>{myreview.length} Comments</h1>
        {
            myreview.map((comm,index)=><Comment key={index} Comment={comm}></Comment>)
        }
       {
        name ||  <form onSubmit={handlemyreview} className='flex gap-4 mt-5' >
                    <input type="text" name='name' placeholder="First Name in lower case" className="input input-bordered w-full max-w-xs mb-3" required />
                    <button type='submit' className="btn btn-success">Comment</button>
                </form>
       }
    </div>
    );
};

export default MyReview;