import React from 'react'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/pimg2.jpg'
import img3 from '../Assets/img10.jpg'

const HeadlineCards = () => {
  return (
    <main className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* cards */}
        <section className='rounded-xl relative'>
          {/* overlay */}
          <section className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out , BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4  hover:bg-orange-600 hover:text-white hover:border-orange-500'>Order Now</button>
          </section>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={img1} alt=''/>
        </section>
        {/* cards */}
        <section className='rounded-xl relative'>
          {/* overlay */}
          <section className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restaurant</p>
            <p className='px-2'>Added Daily</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4  hover:bg-orange-600 hover:text-white hover:border-orange-500'>Order Now</button>
          </section>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={img2} alt=''/>
        </section>
        {/* cards */}
        <section className='rounded-xl relative'>
          {/* overlay */}
          <section className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>We Deliver Dessert's Too</p>
            <p className='px-2'>Tasty Treats</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-600 hover:text-white hover:border-orange-500'>Order Now</button>
          </section>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={img3} alt=''/>
        </section>
    </main>
  )
}

export default HeadlineCards
