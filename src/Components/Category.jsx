import React from 'react'
import {categories} from '../data'

const Category = () => {
    console.log(categories)
  return (
    <main className='max-w-[1640px] px-4 py-12 m-auto'>
        <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Rated MEnu itmes</h1>
        {/* categories */}
        <section className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
            {
                categories.map((item, i) =>{
                    return(
                        <section key={i} className='bg-gray-200 rounded-lg flex justify-between items-center '>
                            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                            <img src='' alt={item.name} className='w-20'/>
                        </section>
                    )
                })
            }
        </section>
    </main>
  )
}

export default Category