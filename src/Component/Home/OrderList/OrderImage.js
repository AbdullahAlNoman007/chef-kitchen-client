import React from 'react';
import img from '../../../Assets/Order.jpg'
import './OrderImage.css'

const OrderImage = () => {
    return (
        <div className='relative'>
           <div className='Image'>
            <img src={img} alt="" className='w-full rounded-xl mx-auto' />
           </div>
            <div className='absolute top-1/4 left-20 text-white text-4xl font-bold'>
                <h1>Order Queue</h1>
            </div>
            <div className='absolute top-1/2 left-20  text-orange-600 text-2xl font-semibold'>
                <h1>Home - Order Details</h1>
            </div>
        </div>
    );
};

export default OrderImage;