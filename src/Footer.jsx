import React from 'react';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='flex justify-between items-center max-w-6xl mx-auto bg-gray-100 py-4 px-4 mt-6 flex-col-reverse lg:flex-row gap-3 lg:gap-0'>
            <p className='text-sm'>Copyright © {new Date().getFullYear()} - All right reserved by Smart Search</p>
            <div className='flex justify-center items-center gap-4'>
                <a href='#' className='text-xl'><FaFacebookSquare /></a>
                <a href='#' className='text-2xl'><FaYoutube /></a>
            </div>
        </div>
    );
};

export default Footer;