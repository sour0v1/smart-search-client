import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaCheckSquare, FaRegSquare } from 'react-icons/fa';
import SelectBrand from '../../components/SelectBrand';
import SelectCategory from '../../components/SelectCategory';
import SelectPriceRange from '../../components/SelectPriceRange';
import { CiSearch } from 'react-icons/ci';

const Home = () => {
    const [clickBrand, setClickBrand] = useState(false);
    const [brands, setBrands] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [prices, setPrices] = useState([]);
    console.log('brands - ', brands);
    console.log('categorys - ', categorys)
    console.log('priceRanges - ', prices)

    // handle brand
    const handleSelectBrand = (brand) => {
        setBrands((prevSelectedBrands) => {
            return prevSelectedBrands?.includes(brand) ?
                prevSelectedBrands?.filter((b) => b !== brand) : //if already selected the remove it
                [...prevSelectedBrands, brand] // if not selected the add it
        })
    }

    // handleCategorySelect
    const handleSelectCategory = (category) => {
        setCategorys((prevSelectedcategorys) => {
            return prevSelectedcategorys?.includes(category) ?
                prevSelectedcategorys?.filter((c) => c !== category) : //if already selected the remove it
                [...prevSelectedcategorys, category] // if not selected the add it
        })
    }

    // handlePriceRange
    const handleSelectPriceRange = (range) => {
        setPrices((prevSelectPrices) => {
            return prevSelectPrices?.includes(range) ?
                prevSelectPrices?.filter((c) => c !== range) : //if already selected the remove it
                [...prevSelectPrices, range] // if not selected the add it
        })
    }

    // handleSearch
    const handleSearch = (event) => {
        event.preventDefault();
        const searchValue = event.target.value;
        console.log(searchValue);
    }

    return (
        <div className='relative w-full max-w-6xl mx-auto px-4 lg:px-0 space-y-6 mt-6'>
            <div className='w-full lg:w-1/3 relative'>
                <input onChange={handleSearch} className='py-2 px-3 rounded-full bg-gray-100  w-full' type="text" />
                {/* <span className='absolute bg-gray-300 h-full px-3'><CiSearch /></span> */}
                <span className="absolute inset-y-0 right-0 flex items-center text-2xl h-full px-3">
                    <CiSearch />
                </span>
            </div>
            <div className='flex justify-start items-center gap-6'>
                <button onClick={() => setClickBrand(!clickBrand)} className={`border py-2 px-6 rounded-lg flex justify-center items-center gap-2 ${clickBrand && 'border-black'}`}>
                    <span>Filter</span>
                    <span className='text-xl'>{clickBrand ? <FaAngleUp /> : <FaAngleDown />}</span>
                </button>

                <button className='border py-2 px-6 rounded-lg'>Sort by :</button>
            </div>
            {/* <div className=' '>
                
            </div> */}

            <div className={`absolute left-0 top-full w-full lg:w-fit bg-slate-50 shadow-lg grid grid-cols-2 lg:grid-cols-3 gap-3 mt-1 pt-3 px-3 rounded-lg duration-200 ${clickBrand ? 'opacity-100 ' : 'opacity-0 pointer-events-none'} justify-items-start overflow-y-scroll h-[50vh]`}>
                {/* Filter by brand name */}
                <h2 className='font-bold border-b pb-2 col-span-2 lg:col-span-3 w-full'>Brand Name</h2>
                <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Apple'}></SelectBrand>
                <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Samsung'}></SelectBrand>
                <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Vivo'}></SelectBrand>
                <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Google'}></SelectBrand>
                <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Oneplus'}></SelectBrand>
                <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Infinix'}></SelectBrand>
                <SelectBrand handleSelectBrand={handleSelectBrand} brands={brands} brandName={'Htc'}></SelectBrand>

                {/* Filter by category name */}
                <h2 className='font-bold border-b pb-2 col-span-2 lg:col-span-3 w-full'>Category Name</h2>
                <SelectCategory handleSelectCategory={handleSelectCategory} categorys={categorys} categoryName={'Android'}></SelectCategory>
                <SelectCategory handleSelectCategory={handleSelectCategory} categorys={categorys} categoryName={'iOS'}></SelectCategory>
                <SelectCategory handleSelectCategory={handleSelectCategory} categorys={categorys} categoryName={'5G'}></SelectCategory>
                <SelectCategory handleSelectCategory={handleSelectCategory} categorys={categorys} categoryName={'Foldable'}></SelectCategory>
                <SelectCategory handleSelectCategory={handleSelectCategory} categorys={categorys} categoryName={'Gaming'}></SelectCategory>

                {/* Filter by Price Range */}
                <h2 className='font-bold border-b pb-2 col-span-2 lg:col-span-3 w-full'>Price Range</h2>

                <SelectPriceRange handleSelectPriceRange={handleSelectPriceRange} prices={prices} priceRange={'7000 - 15000'} ></SelectPriceRange>
                <SelectPriceRange handleSelectPriceRange={handleSelectPriceRange} prices={prices} priceRange={'15000 - 22000'} ></SelectPriceRange>
                <SelectPriceRange handleSelectPriceRange={handleSelectPriceRange} prices={prices} priceRange={'22000 - 40000'} ></SelectPriceRange>
                <SelectPriceRange handleSelectPriceRange={handleSelectPriceRange} prices={prices} priceRange={'40000+'} ></SelectPriceRange>

                {/* confirm filter */}
                <div className='bg-slate-50 border-t text-white py-2 col-span-2 lg:col-span-3 w-full sticky bottom-0 text-end'>
                    <button className='text-white bg-black px-6 py-2 rounded-lg'>Apply</button>
                </div>

            </div>
        </div>

    );
};

export default Home;