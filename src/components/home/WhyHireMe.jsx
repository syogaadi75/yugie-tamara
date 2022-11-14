import { ChatBubbleLeftIcon, ChatBubbleLeftRightIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import React from 'react'

function WhyHireMe() {
    const hireMe = [
        {
            title: 'Communicative',
            description: 'I communicate what I struggle to make all crystal clear. I can communicate my ideas well, proven by my videos.',
            photo: 'https://ml0eehlclbti.i.optimole.com/w:270/h:270/q:mauto/https://kukuhaldy.com/wp-content/uploads/2019/11/communicative.png',
            Icon: ChatBubbleLeftRightIcon,
        },
        {
            title: 'Collaborative',
            description: 'I can work within a team, collaborate well with developers because I’m frontend-end myself, and I love feedbacks.',
            photo: 'https://ml0eehlclbti.i.optimole.com/w:270/h:270/q:mauto/https://kukuhaldy.com/wp-content/uploads/2019/11/collaborative.png',
            Icon: ChatBubbleLeftRightIcon,
        },
        {
            title: 'Management Freak',
            description: 'In Duosweb.com, I manage the whole process from acquiring clients, project timeline, until product delivery.',
            photo: 'https://ml0eehlclbti.i.optimole.com/w:270/h:270/q:mauto/https://kukuhaldy.com/wp-content/uploads/2019/11/management-freak.png',
            Icon: ChatBubbleLeftRightIcon,
        },
        {
            title: 'Client’s Favourite',
            description: 'I’ve been freelancing for 7 years, working directly with overseas clients and all I heard are positive reviews.',
            photo: 'https://ml0eehlclbti.i.optimole.com/w:270/h:270/q:mauto/https://kukuhaldy.com/wp-content/uploads/2019/11/clients-favourite.png',
            Icon: ChatBubbleLeftRightIcon,
        },
    ]
    return (
        <div className='lg:px-12 py-12 lg:mt-14'>
            <div className='flex justify-center w-full text-dark/90 text-3xl lg:text-4xl font-bold font-raleway mb-10 lg:mb-16'>
                Why Hire Me?
            </div>
            <div className='flex justify-center gap-8  flex-wrap'>
                {hireMe.map((hire, i) => (
                    <div
                        data-aos-once="false"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out"
                        key={i}
                        className='flex flex-col w-full lg:w-[270px] justify-center items-center group'
                    >
                        <div className='w-40 relative rounded-full border border-primary/50 mb-4'>
                            <img className='object-contain' src={hire.photo} alt="Img" />

                            {/* <hire.Icon className='absolute top-2 right-2 w-10 text-primary' /> */}
                        </div>
                        <div className='text-lg font-semibold text-dark/90 tracking-wide mb-2'>{hire.title}</div>
                        <div className='text-gray-600 text-center text-sm tracking-tight'>
                            {hire.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyHireMe