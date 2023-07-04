import React from 'react';
import Banner from '../Banner/Banner';
import Food from '../Food/Food';
import Discount from '../Discount/Discount';
import Review from '../Review.js/Review';
import Category from '../category/Category';
import useTitle from '../../Share/Hook/Hook';

const Home = () => {
    useTitle("Home")
    return (
        <div>
           <Banner></Banner> 
           <Category></Category>
           <Food></Food>
           <Discount></Discount>
           <Review></Review>
        </div>
    );
};

export default Home;