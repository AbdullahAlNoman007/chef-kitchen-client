import React from 'react';
import p1 from '../../../Assets/Review/player-1.png'
import p2 from '../../../Assets/Review/player-2.png'
import Carousal from './Carousal';

const Review = () => {
    const reviewData1=[
        {
            title:'Great experince. Fresh taste at a great price!',
            details:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
            img:p1,
            author:'Sunan Rabbi',
            id:1
        },
        {
            title:'Nice experince. Foods are very tasty!',
            details:' "Taco Express" offers mouthwatering tacos bursting with flavor. The tender meat, fresh toppings, and homemade salsa make for a satisfying street food experience.',
            img:p2,
            author:'Sifat Ahmed',
            id:2
        }
    ]
    
    return (
        <div className='my-5'>
        <h1 className='bg-white text-center text-3xl font-bold pt-5'>Say About Us</h1>
        <div className='flex flex-col items-center lg:flex-row gap-4 justify-center bg-white py-5 rounded-xl'>
        
        {
            reviewData1.map(data=><Carousal key={data.id} datam={data}></Carousal>)
        }
           
       </div>
        </div>
    );
};

export default Review;