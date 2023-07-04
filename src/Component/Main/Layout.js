import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import Header from '../Share/Header/Header';

const Layout = () => {
    return (
        <div className='App'>
            <Header></Header>
            <div  className='max-w-screen-xl mx-auto'>
             <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;