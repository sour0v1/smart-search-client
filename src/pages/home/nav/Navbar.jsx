import React from 'react';

const Navbar = () => {
    return (
        <div className='flex flex-col lg:flex-row items-start gap-4 lg:gap-0 lg:justify-between lg:items-center max-w-6xl mx-auto py-4 border-b'>
            <h1 className='text-2xl font-bold flex justify-center items-center w-full lg:w-auto'>Smart Search</h1>
            <ul className='flex lg:justify-center lg:items-center gap-9 overflow-x-scroll lg:overflow-x-auto whitespace-nowrap w-full lg:w-auto border-y lg:border-y-0  py-2 lg:py-0 px-4 lg:px-0'>
                <li>Home</li>
                <li>About</li>
                <li className='hidden'>Log In</li>
            </ul>
        </div>
    );
};

export default Navbar;