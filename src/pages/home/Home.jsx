import React, { useState } from 'react';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';
import SelectBrand from '../../components/SelectBrand';
import SelectCategory from '../../components/SelectCategory';

const Home = () => {
    const [clickBrand, setClickBrand] = useState(false);
    const [brands, setBrands] = useState([]);
    const [categorys, setCategorys] = useState([]);
    console.log(brands);
    console.log(categorys)

    // handle brand
    const handleSelectBrand = (brand) => {
        console.log(brand)
        setBrands((prevSelectedBrands) => {
            return prevSelectedBrands?.includes(brand) ?
                prevSelectedBrands?.filter((b) => b !== brand) : //if already selected the remove it
                [...prevSelectedBrands, brand] // if not selected the add it
        })
    }

    // handleCategorySelect
    const handleSelectCategory = (category) => {
        console.log(category)
        setCategorys((prevSelectedcategorys) => {
            return prevSelectedcategorys?.includes(category) ?
                prevSelectedcategorys?.filter((c) => c !== category) : //if already selected the remove it
                [...prevSelectedcategorys, category] // if not selected the add it
        })
    }

    return (
        <div className='relative w-full max-w-6xl mx-auto'>
            <div className='flex justify-start items-center gap-6'>
                <button onClick={() => setClickBrand(!clickBrand)} className='border py-2 px-6 rounded-lg'>Filter</button>
                <button className='border py-2 px-6 rounded-lg'>Sort by :</button>
            </div>
            <div className={`bg-gray-200 absolute left-0 top-full grid grid-cols-2 lg:grid-cols-3 gap-3 mt-1 p-3 rounded-lg duration-200 ${clickBrand ? 'opacity-100 ' : 'opacity-0 pointer-events-none'} justify-items-start overflow-y-scroll h-[300px] w-full lg:w-fit`}>
                {/* Filter by brand name */}
                <h2 className='font-bold border-b pb-2 col-span-2 lg:col-span-3 border-black w-full'>Brand Name</h2>
                <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Apple'}></SelectBrand>
                <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Samsung'}></SelectBrand>
                <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Vivo'}></SelectBrand>
                <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Google'}></SelectBrand>
                <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Oneplus'}></SelectBrand>
                <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Infinix'}></SelectBrand>
                <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Htc'}></SelectBrand>

                {/* Filter by category name */}
                <h2 className='font-bold border-b pb-2 col-span-2 lg:col-span-3 border-black w-full'>Category Name</h2>
                <SelectCategory handleSelectCategory={handleSelectCategory} categorys={categorys} categoryName={'Android'}></SelectCategory>
                <SelectCategory handleSelectCategory={handleSelectCategory} categorys={categorys} categoryName={'iOS'}></SelectCategory>
                <SelectCategory handleSelectCategory={handleSelectCategory} categorys={categorys} categoryName={'5G'}></SelectCategory>
                <SelectCategory handleSelectCategory={handleSelectCategory} categorys={categorys} categoryName={'Foldable'}></SelectCategory>
                <SelectCategory handleSelectCategory={handleSelectCategory} categorys={categorys} categoryName={'Gaming'}></SelectCategory>

            </div>
        </div>

    );
};

export default Home;