import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Discount.css'

const Discount = () => {
    return (
        <div>
            <div className="hero bg-white rounded-xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <p className='text-2xl font-semibold' style={{color:'#C18955'}}>Delight</p>
                        <p className='text-4xl font-bold'>Specials Offer.</p>
                    <img src="https://eoffelde.sirv.com/1.jpg?w=385&h=260" alt='' className="max-w-sm rounded-lg mt-4" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-lg">Lamb Vindicator</h1>
                        <p className="py-6">
                            <ul>
                                <li className='flex items-center text-gray-500 hoverTextFood'>
                                    <FaCheckCircle className='mr-3'/> Recording starts with the patter of a summer.
                                </li>
                                <li className='flex items-center text-slate-500 hoverTextFood'>
                                    <FaCheckCircle className='mr-3'/> Drifting tone like that of a not-quite-tuned.
                                </li>
                                <li className='flex items-center text-slate-500 hoverTextFood'>
                                    <FaCheckCircle className='mr-3'/> Station rises and for a while drowns out the.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>

            <div className="hero  bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://eoffelde.sirv.com/2.jpg?w=385&h=260" alt='' className="max-w-sm rounded-lg " />
                    <div>
                        <h1 className="text-4xl font-lg">Fish Masala</h1>
                        <p className="py-6">
                            <ul>
                                <li className='flex items-center text-gray-500 hoverTextFood'>
                                    <FaCheckCircle className='mr-3'/> Recording starts with the patter of a summer.
                                </li>
                                <li className='flex items-center text-slate-500 hoverTextFood'>
                                    <FaCheckCircle className='mr-3'/> Drifting tone like that of a not-quite-tuned.
                                </li>
                                <li className='flex items-center text-slate-500 hoverTextFood'>
                                    <FaCheckCircle className='mr-3'/> Station rises and for a while drowns out the.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;