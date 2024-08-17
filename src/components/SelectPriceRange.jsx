import React from 'react';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';

const SelectPriceRange = ({handleSelectPriceRange, priceRange, prices}) => {
    return (
        <div className='flex justify-center items-center gap-2 hover:bg-gray-100 pl-2 pr-6 py-2 rounded-lg'>
            <button onClick={() => handleSelectPriceRange(`${priceRange}`)} className='text-xl'>
                {prices?.includes(`${priceRange}`) ? <FaCheckSquare /> : <FaRegSquare />}
            </button>
            <span>{priceRange}</span>
        </div>
    );
};

export default SelectPriceRange;