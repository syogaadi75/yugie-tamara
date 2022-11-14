import React from 'react'
import { ArrowDownTrayIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import geoCircleSvg from '../../assets/svg/geo-circle.svg'
import geoXSvg from '../../assets/svg/geo-x.svg'
import geoCornerBottomSvg from '../../assets/svg/geo-corner-bottom.svg'
import geoProfileBottomSvg from '../../assets/svg/geo-profile-bottom.svg'
import geoSquareSvg from '../../assets/svg/geo-square.svg'
import '../../assets/css/profile.css'

function Profile() {
    return (
        <div className='min-h-screen relative'>
            <div className='flex lg:flex-row flex-col justify-around gap-8 lg:gap-0'>
                <div className='w-full lg:p-12 flex justify-center flex-col order-2 lg:order-1 relative overflow-hidden'>
                    <div
                        data-aos-once="false"
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className='text-primary text-base lg:text-xl font-bold mb-2 lg:mb-3'
                    >
                        Hi, i’m Yugie Tamara
                    </div>

                    <div
                        data-aos-once="false"
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className='text-xl lg:text-4xl font-bold tracking-wide font-raleway mb-4 lg:mb-7 text-dark'
                    >
                        UI/UX Designer Who Teaches Design on Youtube.
                    </div>

                    <p
                        data-aos-once="false"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className='lg:tracking-wide text-dark/70 mb-6 text-sm lg:text-base tracking-tight'
                    >
                        I’m from Indonesia and I have been working as a <span className='text-primary font-semibold'>UI UX designer</span> for more than 5 years. I’ve worked for a Dutch company Frisseblikken as a web <span className='text-primary font-semibold'>designer</span> and <span className='text-primary font-semibold'>front-end developer</span> for 3 years, I build my own web development team Duosweb since 2018, and currently I work for Bold Australia as UI Designer since 2020. I’ve been freelancing for the last 8 years, and right now I am looking forward to collaborate with you!
                    </p>

                    <div
                        data-aos-once="false"
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out"
                        className='flex items-center gap-2'
                    >
                        <button className='flex items-center gap-2 p-4 bg-red-500 text-white rounded-lg hover:shadow-xl hover:shadow-red-500/40 transition-all ease-linear duration-200'>
                            <EnvelopeIcon className='w-6' />
                            <span>Email Me</span>
                        </button>
                        <button className='flex items-center gap-2 py-4 pr-4 pl-2 hover:pl-4 text-primary hover:bg-primary/10 rounded-lg transition-all ease-linear duration-200'>
                            <ArrowDownTrayIcon className='w-6' />
                            <span>Download CV</span>
                        </button>
                    </div>

                    <div>
                        <img className='absolute hidden lg:flex w-40 lg:w-24 lg:-bottom-2 lg:-left-5' src={geoProfileBottomSvg} alt="wiggle" />
                        <img className='absolute hidden lg:flex w-20 lg:w-20 lg:top-0 rotate-90 lg:right-32' src={geoSquareSvg} alt="wiggle" />
                    </div>
                </div>
                <div className='w-full lg:p-12 flex justify-center items-center order-1 relative overflow-hidden '>
                    <div
                        data-aos-once="false"
                        data-aos="flip-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className='bg-transparent overflow-hidden relative backdrop-blur-lg w-[200px] h-[280px] lg:w-[300px] lg:h-[450px] z-10 card-profile-shadow'
                    >
                        <img className='absolute bottom-0' src="https://ml0eehlclbti.i.optimole.com/w:586/h:785/q:mauto/https://kukuhaldy.com/wp-content/uploads/2019/11/kukuh-photo.png" alt="Foto" />
                    </div>
                    <div>
                        <img
                            data-aos-once="false"
                            data-aos="zoom-in-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            className='absolute hidden lg:flex w-40 top-0 right-0 lg:w-80 lg:top-4 lg:right-20' src={geoCircleSvg} alt="wiggle"
                        />
                        <img
                            data-aos-once="false"
                            data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            className='absolute w-16 z-20 top-10 left-8 lg:w-20 rotate-12 lg:top-32 lg:left-32' src={geoXSvg} alt="wiggle"
                        />
                        <img data-aos-once="false"
                            data-aos="slide-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out" className='absolute w-40 z-20 -bottom-32 -right-24 lg:w-40 lg:-bottom-20 lg:-right-10' src={geoCornerBottomSvg} alt="wiggle" />
                    </div>
                </div>
            </div>
            <div
                data-aos-once="false"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className='absolute top-40 lg:right-0 flex flex-col items-center justify-center gap-4'
            >
                <svg className='cursor-pointer fill-dark/80 hover:fill-[#25D366] transition-all ease-linear' xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none"><path d="M20.4054 4.31016C18.1607 2.01328 15.1714 0.75 11.9946 0.75C5.4375 0.75 0.101786 6.19688 0.101786 12.8906C0.101786 15.0289 0.648214 17.118 1.6875 18.9609L0 25.25L6.30536 23.5602C8.04107 24.5281 9.99643 25.0367 11.9893 25.0367H11.9946C18.5464 25.0367 24 19.5898 24 12.8961C24 9.65313 22.65 6.60703 20.4054 4.31016ZM11.9946 22.9914C10.2161 22.9914 8.475 22.5047 6.95893 21.5859L6.6 21.3672L2.86071 22.368L3.85714 18.6438L3.62143 18.2609C2.63036 16.6531 2.11071 14.7992 2.11071 12.8906C2.11071 7.32891 6.54643 2.80078 12 2.80078C14.6411 2.80078 17.1214 3.85078 18.9857 5.75938C20.85 7.66797 21.9964 10.2 21.9911 12.8961C21.9911 18.4633 17.4429 22.9914 11.9946 22.9914ZM17.4161 15.4336C17.1214 15.2805 15.6589 14.5477 15.3857 14.4492C15.1125 14.3453 14.9143 14.2961 14.7161 14.6023C14.5179 14.9086 13.95 15.5867 13.7732 15.7945C13.6018 15.9969 13.425 16.0242 13.1304 15.8711C11.3839 14.9797 10.2375 14.2797 9.08571 12.2617C8.78036 11.7258 9.39107 11.7641 9.95893 10.6047C10.0554 10.4023 10.0071 10.2273 9.93214 10.0742C9.85714 9.92109 9.2625 8.42813 9.01607 7.82109C8.775 7.23047 8.52857 7.3125 8.34643 7.30156C8.175 7.29063 7.97679 7.29063 7.77857 7.29063C7.58036 7.29063 7.25893 7.36719 6.98571 7.66797C6.7125 7.97422 5.94643 8.70703 5.94643 10.2C5.94643 11.693 7.0125 13.1367 7.15714 13.3391C7.30714 13.5414 9.25179 16.6039 12.2357 17.9219C14.1214 18.7531 14.8607 18.8242 15.8036 18.682C16.3768 18.5945 17.5607 17.9492 17.8071 17.2383C18.0536 16.5273 18.0536 15.9203 17.9786 15.7945C17.9089 15.6578 17.7107 15.5813 17.4161 15.4336Z"></path></svg>

                <svg className='cursor-pointer fill-dark/80 hover:fill-[#dd3875] transition-all ease-linear' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M16 12C16 10.8958 15.6094 9.95312 14.8281 9.17188C14.0469 8.39062 13.1042 8 12 8C10.8958 8 9.95312 8.39062 9.17188 9.17188C8.39062 9.95312 8 10.8958 8 12C8 13.1042 8.39062 14.0469 9.17188 14.8281C9.95312 15.6094 10.8958 16 12 16C13.1042 16 14.0469 15.6094 14.8281 14.8281C15.6094 14.0469 16 13.1042 16 12ZM18.1562 12C18.1562 13.7083 17.5573 15.1615 16.3594 16.3594C15.1615 17.5573 13.7083 18.1562 12 18.1562C10.2917 18.1562 8.83854 17.5573 7.64062 16.3594C6.44271 15.1615 5.84375 13.7083 5.84375 12C5.84375 10.2917 6.44271 8.83854 7.64062 7.64062C8.83854 6.44271 10.2917 5.84375 12 5.84375C13.7083 5.84375 15.1615 6.44271 16.3594 7.64062C17.5573 8.83854 18.1562 10.2917 18.1562 12ZM19.8438 5.59375C19.8438 5.98958 19.7031 6.32812 19.4219 6.60938C19.1406 6.89062 18.8021 7.03125 18.4062 7.03125C18.0104 7.03125 17.6719 6.89062 17.3906 6.60938C17.1094 6.32812 16.9688 5.98958 16.9688 5.59375C16.9688 5.19792 17.1094 4.85938 17.3906 4.57812C17.6719 4.29688 18.0104 4.15625 18.4062 4.15625C18.8021 4.15625 19.1406 4.29688 19.4219 4.57812C19.7031 4.85938 19.8438 5.19792 19.8438 5.59375ZM12 2.15625C11.9271 2.15625 11.5286 2.15365 10.8047 2.14844C10.0807 2.14323 9.53125 2.14323 9.15625 2.14844C8.78125 2.15365 8.27865 2.16927 7.64844 2.19531C7.01823 2.22135 6.48177 2.27344 6.03906 2.35156C5.59635 2.42969 5.22396 2.52604 4.92188 2.64062C4.40104 2.84896 3.94271 3.15104 3.54688 3.54688C3.15104 3.94271 2.84896 4.40104 2.64062 4.92188C2.52604 5.22396 2.42969 5.59635 2.35156 6.03906C2.27344 6.48177 2.22135 7.01823 2.19531 7.64844C2.16927 8.27865 2.15365 8.78125 2.14844 9.15625C2.14323 9.53125 2.14323 10.0807 2.14844 10.8047C2.15365 11.5286 2.15625 11.9271 2.15625 12C2.15625 12.0729 2.15365 12.4714 2.14844 13.1953C2.14323 13.9193 2.14323 14.4688 2.14844 14.8438C2.15365 15.2188 2.16927 15.7214 2.19531 16.3516C2.22135 16.9818 2.27344 17.5182 2.35156 17.9609C2.42969 18.4036 2.52604 18.776 2.64062 19.0781C2.84896 19.599 3.15104 20.0573 3.54688 20.4531C3.94271 20.849 4.40104 21.151 4.92188 21.3594C5.22396 21.474 5.59635 21.5703 6.03906 21.6484C6.48177 21.7266 7.01823 21.7786 7.64844 21.8047C8.27865 21.8307 8.78125 21.8464 9.15625 21.8516C9.53125 21.8568 10.0807 21.8568 10.8047 21.8516C11.5286 21.8464 11.9271 21.8438 12 21.8438C12.0729 21.8438 12.4714 21.8464 13.1953 21.8516C13.9193 21.8568 14.4688 21.8568 14.8438 21.8516C15.2188 21.8464 15.7214 21.8307 16.3516 21.8047C16.9818 21.7786 17.5182 21.7266 17.9609 21.6484C18.4036 21.5703 18.776 21.474 19.0781 21.3594C19.599 21.151 20.0573 20.849 20.4531 20.4531C20.849 20.0573 21.151 19.599 21.3594 19.0781C21.474 18.776 21.5703 18.4036 21.6484 17.9609C21.7266 17.5182 21.7786 16.9818 21.8047 16.3516C21.8307 15.7214 21.8464 15.2188 21.8516 14.8438C21.8568 14.4688 21.8568 13.9193 21.8516 13.1953C21.8464 12.4714 21.8438 12.0729 21.8438 12C21.8438 11.9271 21.8464 11.5286 21.8516 10.8047C21.8568 10.0807 21.8568 9.53125 21.8516 9.15625C21.8464 8.78125 21.8307 8.27865 21.8047 7.64844C21.7786 7.01823 21.7266 6.48177 21.6484 6.03906C21.5703 5.59635 21.474 5.22396 21.3594 4.92188C21.151 4.40104 20.849 3.94271 20.4531 3.54688C20.0573 3.15104 19.599 2.84896 19.0781 2.64062C18.776 2.52604 18.4036 2.42969 17.9609 2.35156C17.5182 2.27344 16.9818 2.22135 16.3516 2.19531C15.7214 2.16927 15.2188 2.15365 14.8438 2.14844C14.4688 2.14323 13.9193 2.14323 13.1953 2.14844C12.4714 2.15365 12.0729 2.15625 12 2.15625ZM24 12C24 14.3854 23.974 16.0365 23.9219 16.9531C23.8177 19.1198 23.1719 20.7969 21.9844 21.9844C20.7969 23.1719 19.1198 23.8177 16.9531 23.9219C16.0365 23.974 14.3854 24 12 24C9.61458 24 7.96354 23.974 7.04688 23.9219C4.88021 23.8177 3.20312 23.1719 2.01562 21.9844C0.828125 20.7969 0.182292 19.1198 0.078125 16.9531C0.0260417 16.0365 0 14.3854 0 12C0 9.61458 0.0260417 7.96354 0.078125 7.04688C0.182292 4.88021 0.828125 3.20312 2.01562 2.01562C3.20312 0.828125 4.88021 0.182292 7.04688 0.078125C7.96354 0.0260417 9.61458 0 12 0C14.3854 0 16.0365 0.0260417 16.9531 0.078125C19.1198 0.182292 20.7969 0.828125 21.9844 2.01562C23.1719 3.20312 23.8177 4.88021 23.9219 7.04688C23.974 7.96354 24 9.61458 24 12Z"></path></svg>

                <svg className='cursor-pointer fill-dark/80 hover:fill-[#FF0000] transition-all ease-linear' xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 34 24" fill="none"><path d="M32.4448 4.27049C32.074 2.88475 30.9817 1.79338 29.5947 1.42301C27.0807 0.75 16.9999 0.75 16.9999 0.75C16.9999 0.75 6.91912 0.75 4.40507 1.42301C3.01809 1.79344 1.92573 2.88475 1.55497 4.27049C0.881348 6.78223 0.881348 12.0227 0.881348 12.0227C0.881348 12.0227 0.881348 17.2632 1.55497 19.775C1.92573 21.1607 3.01809 22.2066 4.40507 22.577C6.91912 23.25 16.9999 23.25 16.9999 23.25C16.9999 23.25 27.0807 23.25 29.5947 22.577C30.9817 22.2066 32.074 21.1607 32.4448 19.775C33.1184 17.2632 33.1184 12.0227 33.1184 12.0227C33.1184 12.0227 33.1184 6.78223 32.4448 4.27049ZM13.7029 16.7807V7.26475L22.1285 12.0229L13.7029 16.7807Z"></path></svg>
            </div>
        </div>
    )
}

export default Profile