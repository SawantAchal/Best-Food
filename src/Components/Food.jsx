import React, { useState } from 'react'
import {data} from '../data'

const Food = () => {
    const [food , setFood] = useState(data)
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    // console.log(data)

    // filter by type
    const filterType = (category) =>{
        setFood(
            data.filter((item) => {
                return item.category === category
            })
        )
    }

    // // filter by price
    // const filterPrice = (prices) =>{
    //     setFood(
    //         data.filter((item) => {
    //             return item.prices === prices
    //         })
    //     )
    // }

    // filter by price range
    const filterPriceRange = () => {
        setFood(
            data.filter((item) => {
                const productPrice = parseFloat(item.prices.replace(/[^\d.]/g, '')); // Remove non-numeric characters
                    return (
                        (minPrice === '' || productPrice >= parseFloat(minPrice)) &&
                        (maxPrice === '' || productPrice <= parseFloat(maxPrice))
                    );
            }  )
        );
    };

    // filter by type
    const filterTypes = (type) =>{
        setFood(
            data.filter((item) => {
                return item.type === type
            })
        )
    }

  return (
    <main className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top rated menu itmes</h1>
        {/* filter row */}
        <section className='flex flex-col lg:flex-row justify-between'>
            {/* filter type */}
            <section>
                <p className='font-bold text-gray-700'>Filter type</p>
                <section className='flex justify-between flex-wrap'>
                    <button onClick={() => setFood(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>All</button>
                    <button onClick={() => filterType('burger')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Burger</button>
                    <button onClick={() => filterType('pizza')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Pizza</button>
                    <button onClick={() => filterType('salad')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Salad</button>
                    <button onClick={() => filterType('chicken')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Chicken</button>
                </section>
            </section>
            {/* <filter types */}
            <section>
                <p className='font-bold text-gray-700'>Filter Types</p>
                <section className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterTypes('veg')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Veg</button>
                    <button onClick={() => filterTypes('non-veg')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Non-Veg</button>
                </section>
            </section>
            {/* <filter prices */}
            {/* <section>
                <p className='font-bold text-gray-700'>Filter price</p>
                <section className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterPrice('$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$</button>
                    <button onClick={() => filterPrice('$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$</button>
                    <button onClick={() => filterPrice('$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$$</button>
                    <button onClick={() => filterPrice('$$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$$$</button>
                </section>
            </section> */}

            <section>
                <p className='font-bold text-gray-700'>Filter price range</p>
                <section className='flex justify-between max-w-[390px] w-full'>
                    <input className=' p-1 w-1/2  ' type='number' placeholder='Min Price' value={minPrice} onChange={(e) => setMinPrice(e.target.value)}  />
                    <input type='number' placeholder='Max Price' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className='border-orange-600 p-1 w-1/2' />
                    <button onClick={filterPriceRange} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Apply</button>
                </section>
            </section>
        </section>
        {/* display food */}
        <section className='grid grid-cols-1 lg:grid-cols-4 gap-6 pt-4 min-[390px]:grid-cols-2 md:grid-cols-3'>
            {
                food.map((item , index) => {
                    return(
                        <section key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                            <section className='flex justify-between px-2 py-4 '>
                                <p className='font-bold'>{item.name}</p>
                                {/* <p>{item.category}</p>
                                <p>{item.type}</p> */}
                                <p className=''><span className='bg-orange-500 text-white p-1 rounded-full'>{item.prices}</span></p>
                            </section>
                        </section>
                    )
                })
            }
        </section>
    </main>
  )
}

export default Food
