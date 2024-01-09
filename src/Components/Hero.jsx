import React from 'react'
import img from '../Assets/img1.jpg'

const Hero = () => {
  return (
    <main className='max-w-[1640px] mx-auto p-4'>
        <section className='max-h-[500px] relative'>
            {/* overlay */}
            <section className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Foods <span className='text-orange-500'>Delivery</span></h1>
            </section>
            <img src={img} alt='' className='w-full max-h-[500px] object-cover'/>
        </section>
    </main>
  )
}

export default Hero