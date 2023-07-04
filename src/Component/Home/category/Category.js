import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './category.css'

const Category = () => {
    const [category,setCategory]=useState()
    useEffect(()=>{
        fetch('https://chef-kitchen-server.vercel.app/catergory')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div>
            <div>
                <p className='text-center text-2xl lg:text-5xl font-bold my-4'>Today's Menu.</p>
            </div>
            {
                category?.map(data=><NavLink className={({isActive})=>isActive? "active my-3 ml-2 lg:mx-6 block lg:inline hover:text-orange-700 text-lg font-medium":"font-medium text-lg my-3 ml-2 lg:mx-6 block lg:inline hover:text-orange-700"} to={`/service/${data.categoryID}`} key={data._id}>{data.name}</NavLink>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Category;