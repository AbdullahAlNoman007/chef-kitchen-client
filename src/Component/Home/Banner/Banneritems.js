import React from 'react';
import './BannerItems.css'

const Banneritems = ({data}) => {
    const {image,id,pre,next,title,discrip}=data
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <img src={image} alt='' className="w-full carouselImage rounded-xl" />

            <div className='absolute top-1/4 top text-5xl font-semibold left-1/3'>
                <h1 className='text-white'>{title}</h1>
            </div>
            <div className=' absolute top-1/3 text-base mt-5 left-1/3 w-1/3'>
                <p className='text-white hidden lg:inline-block'>{discrip}</p>
            </div>
            <div className='absolute top-1/2 left-1/3'>
            <button className="bg-white rounded-3xl py-2 px-6 hover:bg-lime-600" >View Menu</button>
            </div>

            <div className="absolute flex bottom-7 right-5">
            <a href={`#slide${pre}`} className="btn btn-circle mr-5">❮</a> 
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div> 
    );
};

export default Banneritems;