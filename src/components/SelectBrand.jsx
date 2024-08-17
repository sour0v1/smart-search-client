import React from 'react';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';

const SelectBrand = ({ handleSelectBrand, brands, brandName }) => {
    return (
        <div className='flex justify-center items-center gap-2 hover:bg-gray-100 pl-2 pr-6 py-2 rounded-lg'>
            <button onClick={() => handleSelectBrand(`${brandName}`)} className='text-xl'>
                {brands?.includes(`${brandName}`) ? <FaCheckSquare /> : <FaRegSquare />}
            </button>
            <span>{brandName}</span>
        </div>
    );
};

export default SelectBrand;