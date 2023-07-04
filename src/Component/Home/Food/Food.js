import React from 'react';
import restaurent from '../../../Assets/Food Icon/meat.png';
import dinner from '../../../Assets/Food Icon/dinner.png';
import cook from '../../../Assets/Food Icon/chef.png';
import './Food.css'
import dessert from '../../../Assets/dessert.jpg'
import Fooditem from './Fooditem';
const Food = () => {
    const foodData=[
        {
            image:restaurent,
            title:"Restaurent",
            id:3
        },
        {
            image:dinner,
            title:'Wine & Cocktails',
            id:2
        },
        {
            image:cook,
            title:'Expert Chef',
            id:1
        }
    ]
    return (
        <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h4 className='text-2xl font-semibold ' style={{color:'#C19855'}}>Appetite</h4>
                        <p className='text-5xl font-bold my-3'>Delicious Food.</p>
                        <img src={dessert} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='mr-8'>                    
                    {
                        foodData.map(food => <Fooditem key={food.id} food={food}></Fooditem>)
                    }
                    <button className='foodButton rounded-3xl py-2 px-6 mt-6'>Reservation</button>
                    </div>
                </div>
        </div>
    );
};

export default Food;