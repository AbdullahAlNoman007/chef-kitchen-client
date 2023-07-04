import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useTitle from '../../Share/Hook/Hook';
import Listdetails from './Listdetails';
import OrderImage from './OrderImage';

const Orderlist = () => {
    const [list,setList]=useState()
    useTitle("Order List")
    useEffect(()=>{
        fetch('https://chef-kitchen-server.vercel.app/list')
        .then(res=>res.json())
        .then(data=>{
            setList(data)
        })
    },[])
    const handleClick=(id)=>{

        const remaining = list.filter(item => item._id !== id)
        const select =list.find(item=> item._id === id)
        select.status = "Approved"
        fetch(`https://chef-kitchen-server.vercel.app/order/${id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
              },
              body: JSON.stringify({status:"Approved"})
        })
        .then(res => res.json())
        .then(data=>console.log(data))
        setList([select,...remaining])
        
    }
    const handleDelete=(id)=>{
        const proccess =window.confirm("Is the order complete? ")
        if(proccess){

            fetch(`https://chef-kitchen-server.vercel.app/order/${id}`,{
            method:'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
               if(data.acknowledged){
                const remaining = list.filter(item => item._id !== id)
                setList([...remaining])
               }
            })

        }
    }
    return (
        <div className='flex flex-col items-center gap-6'>

            <OrderImage></OrderImage>
            <div className="overflow-x-auto mb-6">
                <table className="table">
                {/* head */}
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Order</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list?.map(listitem =><Listdetails key={listitem._id} item={listitem} handleClick={handleClick} handleDelete={handleDelete}></Listdetails>) 
                    }
                </tbody>     
                </table>
            </div>

        </div>
    );
};

export default Orderlist;