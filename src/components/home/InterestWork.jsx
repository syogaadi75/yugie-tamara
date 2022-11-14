import { EnvelopeIcon } from '@heroicons/react/24/outline'
import React from 'react'

function InterestWork() {
    return (
        <div
            data-aos-once="false"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            className='w-full py-10 bg-primary/90 flex flex-col lg:flex-row justify-between items-center px-4 lg:px-20 gap-4'
        >
            <div className='text-xl lg:text-3xl font-bold text-white tracking-wider font-raleway'>
                Interested working with me?
            </div>
            <div className='flex gap-2'>
                <button className='flex items-center gap-2 p-4 bg-red-500 text-white hover:shadow-xl hover:shadow-red-500/40 transition-all ease-linear duration-200'>
                    <EnvelopeIcon className='w-6' />
                    <span>Email Me</span>
                </button>
                <button className='p-3 text-white border border-white hover:bg-white hover:text-primary transition-all ease-linear'>See More Projects</button>
            </div>
        </div>
    )
}

export default InterestWork