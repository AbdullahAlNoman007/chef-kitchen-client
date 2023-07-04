import React from 'react';

const Comment = ({Comment}) => {
    const {name,comment}=Comment
    return (
        <div className='my-5'>

                <hr />
                <div className='py-5'>
                    <h1 className='text-2xl font-bold mb-2'>{name}</h1>
                    <p className='text-xl text-gray-500'>{comment}</p>
                </div>
                <hr />

            </div>
    );
};

export default Comment;