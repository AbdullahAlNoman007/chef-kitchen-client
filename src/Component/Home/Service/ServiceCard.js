import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Fade from 'react-reveal/Fade';

const ServiceCard = ({data}) => {
    const {image,name,price,description,_id}=data
    return (
        <Fade left>
            <div className="card card-compact bg-base-100 shadow-xl p-3">
            <figure>
                
                <PhotoProvider>
                    <PhotoView key={_id} src={image} >
                        <img src={image} alt="" />
                    </PhotoView>    
                </PhotoProvider>
                </figure>
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">Price: {price}</h2>
                {
                 description?.length > 15 ? <p className='text-md'>{description.slice(0,250)+" .... "} <Link to={`http://localhost:3000/menu/${_id}`} id='link'>See more</Link></p>   : <p>{description}</p>
                }
                <div className='text-orange-600 text-xl flex justify-end'>
                    <Link to={`http://localhost:3000/order/${_id}`}><HiArrowRight/></Link>
                </div>
            </div>
        </div>
        </Fade>
    );
};

export default ServiceCard;