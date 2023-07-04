import React from 'react';
import error from '../../../Assets/error.png'
import useTitle from '../../Share/Hook/Hook';

const Error = () => {
    useTitle("Not Found")
    return (
        <div className='my-5 flex justify-center'>
            <img src={error} alt="" />
        </div>
    );
};

export default Error;