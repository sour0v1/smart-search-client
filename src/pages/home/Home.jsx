import React, { useState } from 'react';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';
import SelectBrand from '../../components/SelectBrand';

const Home = () => {
    const [clickBrand, setClickBrand] = useState(false);
    const [brands, setBrands] = useState([]);
    console.log(brands);

    const handleSelectBrand = (brand) => {
        console.log(brand)
        setBrands((prevSelectedBrands) => {
            return prevSelectedBrands?.includes(brand) ?
                prevSelectedBrands?.filter((b) => b !== brand) : //if already selected the remove it
                [...prevSelectedBrands, brand] // if not selected the add it
        })
    }

    return (
        <div className='max-w-6xl mx-auto space-y-9 mt-6 px-4 lg:px-0'>
            <input className='w-1/3 bg-gray-100 py-2 px-3 rounded-full outline-none' type="text" />
            <div className='flex justify-between items-center gap-6'>
                <div className='flex justify-center items-center gap-6'>
                    {/* filter product */}
                    <div className='relative'>
                        <button onClick={() => setClickBrand(!clickBrand)} className='border py-2 px-6 rounded-lg'>Filter</button>
                        <div className={`bg-gray-200 absolute left-0 top-full grid grid-cols-3 min-w-[500%] gap-3 mt-1 p-3 rounded-lg duration-200 ${clickBrand ? 'opacity-100 ' : 'opacity-0 pointer-events-none'} justify-items-start overflow-y-scroll h-[100px]`}>
                            {/* Filter by brand name */}
                            <h2 className='font-bold col-span-3 border-b pb-2 border-black w-full'>Brand Name</h2>
                            <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Apple'}></SelectBrand>
                            <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Samsung'}></SelectBrand>
                            <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Vivo'}></SelectBrand>
                            <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Google'}></SelectBrand>
                            <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Oneplus'}></SelectBrand>
                            <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Infinix'}></SelectBrand>
                            <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Htc'}></SelectBrand>

                            {/* Filter by category name */}
                        </div>

                    </div>
                </div>

                {/* Sort Product */}
                <div className='border py-2 px-6 rounded-lg'>
                    Sort By : <span>Price</span>
                </div>
            </div>
        </div>
    );
};

export default Home;