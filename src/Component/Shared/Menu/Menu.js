import React from 'react';
import { Fade } from 'react-reveal';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Home/Service/ServiceCard';
import useTitle from '../../Share/Hook/Hook';

const Menu = () => {
    const datas =useLoaderData()
    useTitle("All services")
    return (
        <div>
            <Fade left>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mb-3'>
                {
                    datas?.map(data=> <ServiceCard key={data._id} data={data}></ServiceCard>)
                }
            </div>
            </Fade>
        </div>
    );
};

export default Menu;