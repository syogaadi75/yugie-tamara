import React from 'react'
import { DocumentDuplicateIcon, LinkIcon } from '@heroicons/react/24/outline'

function ProjectCard({ project }) {
    return (
        <div
            className='max-w-[550px]'
            data-aos-once="false"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
        >
            <div className='group relative overflow-hidden cursor-pointer mb-6'>
                <img className='object-cover group-hover:scale-105 transition-all ease-linear duration-300' src={project.imgUrl} alt="Project Img" />
                <div className='w-full absolute top-0 h-full bg-transparent group-hover:bg-dark/50 transition-all ease-linear duration-300 flex justify-center items-center p-8 invisible group-hover:visible'>
                    <div className='text-white text-lg font-bold text-center'>{project.title}</div>
                </div>
            </div>

            <div className='lg:text-lg font-semibold text-dark/90'>
                {project.title}
            </div>

            <div className='flex items-center gap-4 mt-4'>
                <button className='flex items-center gap-1 lg:gap-2 px-3 py-3 bg-primary text-white rounded shadow-xl shadow-primary/20 transition-all ease-linear duration-200'>
                    <DocumentDuplicateIcon className='w-4 lg:w-6' />
                    <span className='text-sm lg:text-base'>View Study Case</span>
                </button>
                <button className='flex items-center gap-1 lg:gap-2 py-3 pr-3 pl-1 hover:pl-3 text-primary hover:bg-primary/10 rounded-lg transition-all ease-linear duration-200'>
                    <LinkIcon className='w-4 lg:w-6' />
                    <span className='text-sm lg:text-base'>Visit Website</span>
                </button>
            </div>
        </div>
    )
}

export default ProjectCard