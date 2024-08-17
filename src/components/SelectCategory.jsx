import React from 'react';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';

const SelectCategory = ({handleSelectCategory, categorys, categoryName}) => {
    return (
        <div className='flex justify-center items-center gap-2 hover:bg-gray-100 pl-2 pr-6 py-2 rounded-l '>
            <button onClick={() => handleSelectCategory(`${categoryName}`)} className='text-xl'>
                {categorys?.includes(`${categoryName}`) ? <FaCheckSquare /> : <FaRegSquare />}
            </button>
            <span>{categoryName}</span>
        </div>
    );
};

export default SelectCategory;