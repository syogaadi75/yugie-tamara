import React from 'react'
import ProjectCard from './ProjectCard'

function SelectedProject() {

    const selectedProjects = [
        {
            imgUrl: 'https://ml0eehlclbti.i.optimole.com/w:1536/h:865/q:mauto/https://kukuhaldy.com/wp-content/uploads/2019/11/jala-web3.jpg',
            type: 'web',
            title: 'JALA, Redesign of Website Company Profile'
        },
        {
            imgUrl: 'https://ml0eehlclbti.i.optimole.com/w:1734/h:977/q:mauto/https://kukuhaldy.com/wp-content/uploads/2019/11/Group-156.jpg',
            type: 'android',
            title: 'JALA, Mobile App Design for IoT Device'
        },
        {
            imgUrl: 'https://ml0eehlclbti.i.optimole.com/w:1534/h:863/q:mauto/https://kukuhaldy.com/wp-content/uploads/2019/11/thumbbb11.jpg',
            type: 'web',
            title: 'Couvee Web Design'
        },
        {
            imgUrl: 'https://ml0eehlclbti.i.optimole.com/w:1156/h:650/q:mauto/https://kukuhaldy.com/wp-content/uploads/2020/01/thumbbb.jpg',
            type: 'ios',
            title: 'Couvee Mobile App'
        },
    ]

    return (
        <div className='min-h-screen w-full lg:px-12 py-12'>
            <div className='text-xl lg:text-3xl font-semibold tracking-wide font-raleway uppercase text-dark mb-1'>Selected Projects</div>
            <div className='text-sm text-dark/70 mb-8 lg:mb-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, est?</div>

            <div className='flex flex-wrap gap-16 justify-center'>
                {selectedProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default SelectedProject