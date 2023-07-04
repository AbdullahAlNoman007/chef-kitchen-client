import React from 'react';
import img1 from '../../../Assets/Banner/1.jpg'
import img2 from '../../../Assets/Banner/2.jpg'
import img3 from '../../../Assets/Banner/3.jpg'
import Banneritems from './Banneritems';

const Banner = () => {
    const BannerData =[
        {
            id:1,
            image:img1,
            pre:3,
            next:2,
            title:"Blow'n Smoke!",
            discrip: `Heavy on Beef, with ribs and shoulder taking center stage,
              Memphis-Style BBQ is one of the country four predominant pes`
        },
        {
            id:2,
            image:img2,
            pre:1,
            next:3,
            title:"Make It Great",
            discrip: `Heavy on Beef, with ribs and shoulder taking center stage,
             Memphis-Style BBQ is one of the country four predominant pes`
        },
        {
            id:3,
            image:img3,
            pre:2,
            next:1,
            title:"Grilled Chicken",
            discrip: `Heavy on Beef, with ribs and shoulder taking center stage,
             Memphis-Style BBQ is one of the country four predominant pes`
        },
    ]
    return (
        <div className="carousel w-full lg:w-full py-3">
            {
            BannerData.map(data=> <Banneritems key={data.id} data={data} ></Banneritems>)
            }
        </div>
    );
};

export default Banner;