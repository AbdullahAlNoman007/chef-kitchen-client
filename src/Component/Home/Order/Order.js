import React from 'react';
import { useLoaderData } from 'react-router-dom';
import order from '../../../Assets/Order.jpg'
import useTitle from '../../Share/Hook/Hook';
import './Order.css'
import OrderForm from './OrderForm';

const Order = () => {
    const {name,price}=useLoaderData()
    const data=useLoaderData()
    useTitle("Order")
    return (
       <div>
         <div className='relative'>
            <div className='OrderImage'>
            <img className='mx-auto rounded-xl w-full' src={order} alt="" />
            </div>
           <div className='text-white absolute top-1/4 text-4xl font-semibold left-52'>
                <h1>Item: {name}</h1>
            </div>

           <div className=' text-white absolute top-1/2 top text-4xl font-semibold left-52'>
                <h1>Price: {price}</h1>
            </div> 
        </div>
        <OrderForm data={data}></OrderForm>
       </div>
    );
};
export default Order;