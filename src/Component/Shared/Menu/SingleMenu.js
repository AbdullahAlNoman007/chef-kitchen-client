import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Share/Hook/Hook';
import MenuCard from './MenuCard';

const SingleMenu = () => {
    const data =useLoaderData()
    useTitle("Service Review")
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {
                <MenuCard key={data._id} data={data}></MenuCard>
            }
        </div>
    );
};

export default SingleMenu;