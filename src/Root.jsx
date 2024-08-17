import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './pages/home/nav/Navbar';

const Root = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </>
    );
};

export default Root;