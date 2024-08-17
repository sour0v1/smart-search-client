import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './pages/home/nav/Navbar';
import Footer from './Footer';

const Root = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Root;