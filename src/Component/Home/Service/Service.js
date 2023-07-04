import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import Fade from 'react-reveal/Fade';
const Service = () => {
    const datas =useLoaderData()
    return (
        <div>
            <Fade left>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4'>
                {
                    datas.slice(0,4).map(data=> <ServiceCard key={data._id} data={data}></ServiceCard>)
                }
            </div>
            </Fade>
            {
                datas?.length> 3 && <Link to="/menus" className='flex justify-center mt-7'><button className='btn btn-success' > See more</button></Link>
            }
        </div>
    );
};

export default Service;