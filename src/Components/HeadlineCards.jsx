import React from 'react'
import img1 from '../Assets/img1.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import img10 from '../Assets/img10.jpg'
import img2 from '../Assets/img5.jpg'
import img3 from '../Assets/img1.jpg'

const HeadlineCards = () => {
  return (
    <main className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* cards */}
        <section className='rounded-xl relative'>
          {/* overlay */}
          <section className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out , BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
          </section>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={img1} alt=''/>
        </section>
        {/* cards */}
        <section className='rounded-xl relative'>
          {/* overlay */}
          <section className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out , BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
          </section>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={img4} alt=''/>
        </section>
        {/* cards */}
        <section className='rounded-xl relative'>
          {/* overlay */}
          <section className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out , BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
          </section>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={img5} alt=''/>
        </section>
        {/* cards */}
        <section className='rounded-xl relative'>
          {/* overlay */}
          <section className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out , BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
          </section>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={img10} alt=''/>
        </section>
        {/* cards */}
        <section className='rounded-xl relative'>
          {/* overlay */}
          <section className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out , BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
          </section>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={img2} alt=''/>
        </section>
        {/* cards */}
        <section className='rounded-xl relative'>
          {/* overlay */}
          <section className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out , BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
          </section>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={img3} alt=''/>
        </section>
    </main>
  )
}

export default HeadlineCards