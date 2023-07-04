import React from 'react';

const BlogPost = ({blog}) => {
    const {title,details}=blog
    return (
        <div className='bg-base-200 m-5 p-10 rounded-xl'>
            <h1 className='text-3xl mb-6 font-bold'>{title}</h1>
            <p className='text-lg pl-5 text-gray-500'>{details}</p>
        </div>
    );
};

export default BlogPost;