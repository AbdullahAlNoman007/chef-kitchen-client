import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthProvider } from '../../../Firebase/AuthContext';
import Comment from '../Comment/Comment';

const MenuCard = ({data}) => {
    const {user}=useContext(AuthProvider)
    const nam=user?.displayName?.split(" ")[0].toLowerCase()
    const {image,name,price,description,_id}=data
    

    const [comments,setComment]=useState([])
    const number =comments.length

   useEffect(()=>{

    fetch(`https://chef-kitchen-server.vercel.app/comments?id=${_id}`)
    .then(res=>res.json())
    .then(data=>{
        setComment(data)
    })

   },[_id])

    const handlecomment=(event)=>{
        event.preventDefault()
        const form =event.target
        const name=form.name.value
        const comment=form.comment.value
        const com ={
            serviceID:_id,
            name,
            comment
        }
        fetch('https://chef-kitchen-server.vercel.app/comments', {
        method: 'PATCH',
        body: JSON.stringify(com),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            setComment([...comments,com])
        });
        
    }
    const fieldwithname = <div className='flex gap-4'>

    <input type="text" name='name' placeholder="First Name" className="input input-bordered w-full max-w-xs mb-3" required />
    <input type="text" name='comment' placeholder="Comment" className="input input-bordered w-full max-w-xl mb-3" required />
    <button type='submit' className="btn btn-success" disabled={!user?.uid}>Comment</button>
 
    </div>

    const fieldwithoutname=<div className='flex gap-4'>

    <input type="text" name='name' placeholder="First Name" className="input input-bordered w-full max-w-xs mb-3" value={nam} readOnly/>
    <input type="text" name='comment' placeholder="Comment" className="input input-bordered w-full max-w-xl mb-3" required/>
    <button type='submit' className="btn btn-success" disabled={!user?.uid}>Comment</button>

    </div>

    return (
        <>

        <div className="card card-compact bg-base-100 shadow-xl my-5 w-full h-fit">
            <figure><img src={image} alt="Shoes" className='rounded-xl' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">Price: {price}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>

        <div className='bg-white m-5 p-5 rounded-xl h-fit'>
            <h1 className='text-3xl'>{number} Comments</h1>
           {
            comments.map((comm,index)=><Comment key={index} Comment={comm}></Comment>)
           }
        <form onSubmit={handlecomment}>
            {
                nam?fieldwithoutname:fieldwithname
               
            }
        </form>
        </div>

        </>
    );
};

export default MenuCard;