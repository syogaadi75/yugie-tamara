import { PlayIcon } from '@heroicons/react/24/solid'
import React from 'react'
import geoCircleSvg from '../../assets/svg/geo-circle.svg'

function Youtube() {
    return (
        <div className='w-full lg:px-12 py-4 lg:py-10 gap-8 lg:gap-0 flex flex-col lg:flex-row justify-between items-center'>
            <div
                data-aos-once="false"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                className='w-full relative flex justify-center items-center lg:justify-start lg:items-start'
            >
                <div className='absolute z-20 -top-10 right-0 lg:right-24 w-16 h-16 lg:w-20 lg:h-20 bg-red-500/80 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300'>
                    <PlayIcon className='w-8 lg:w-10 -h-10 ml-1 text-white' />
                </div>
                <div
                    className='bg-transparent overflow-hidden relative backdrop-blur-lg w-[400px] h-[200px] lg:w-[450px] lg:h-[300px] z-10 card-profile-shadow'
                >
                    <img className='' src="https://ml0eehlclbti.i.optimole.com/w:586/h:785/q:mauto/https://kukuhaldy.com/wp-content/uploads/2019/11/kukuh-photo.png" alt="Foto" />
                </div>
                <div className='absolute -left-2 -top-4 lg:-left-10 lg:-top-10 rotate-6 shape-1 bg-red-500/90'></div>
                <img
                    className='absolute hidden z-0 lg:flex w-40 top-10 -right-0 lg:w-80 lg:top-4 lg:right-20 rotate-45' src={geoCircleSvg} alt="wiggle"
                />
            </div>
            <div
                data-aos-once="false"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                className='w-full'
            >
                <div className='text-2xl lg:text-3xl font-bold mb-4 lg:mb-8 tracking-wide text-dark/90'>Why I Started a Youtube Channel?</div>
                <div className='text-gray-600 mb-4 text-xs lg:text-base'>
                    First, I want to educate people in my country about UI UX Designs, because we don’t get that much in our formal education, especially the ones who can’t afford colleges. That’s why I use the Indonesian language in my videos. Second, it helps me grow my personal brand, to get more exposure to potential clients so they know the way how I think and how I communicate my thoughts.
                </div>
                <button className='flex items-center gap-2 p-4 bg-red-500 text-white rounded-lg shadow-xl shadow-red-500/40 transition-all ease-linear duration-200'>
                    <div>
                        <svg className='cursor-pointer fill-white transition-all ease-linear' xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 34 24" fill="none"><path d="M32.4448 4.27049C32.074 2.88475 30.9817 1.79338 29.5947 1.42301C27.0807 0.75 16.9999 0.75 16.9999 0.75C16.9999 0.75 6.91912 0.75 4.40507 1.42301C3.01809 1.79344 1.92573 2.88475 1.55497 4.27049C0.881348 6.78223 0.881348 12.0227 0.881348 12.0227C0.881348 12.0227 0.881348 17.2632 1.55497 19.775C1.92573 21.1607 3.01809 22.2066 4.40507 22.577C6.91912 23.25 16.9999 23.25 16.9999 23.25C16.9999 23.25 27.0807 23.25 29.5947 22.577C30.9817 22.2066 32.074 21.1607 32.4448 19.775C33.1184 17.2632 33.1184 12.0227 33.1184 12.0227C33.1184 12.0227 33.1184 6.78223 32.4448 4.27049ZM13.7029 16.7807V7.26475L22.1285 12.0229L13.7029 16.7807Z"></path></svg>
                    </div>
                    <span>Visit My Channel</span>
                </button>
            </div>
        </div>
    )
}

export default Youtube