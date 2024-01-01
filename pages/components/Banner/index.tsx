"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';


const Banner = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='bg-image relative' id="home-section">
            <div className='arrowOne'></div>
            <div className='radial-banner hidden lg:block'></div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="1YyAzVmP9xQ" onClose={() => setOpen(false)} />

            <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">

                <div className='height-work'>
                <div className='grid grid-cols-1 lg:grid-cols-12 my-5 mb -4'>
    <div className='col-span-7 order-2 lg:order-none'>
        <div className='arrowTwo'></div>
        <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start text-center">
            Seamless Payments, Smarter Business
        </h1>
        <p className='text-white md:text-lg font-normal mb-10 md:text-start text-center'>Transform your payment experience with our AI-powered customer support and fraud detection. Safety and simplicity, together.</p>
        <div className='flex align-middle justify-center md:justify-start'>
            <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6'>Create your account</button>
            <button onClick={() => setOpen(true)} className='bg-transparent flex justify-center items-center text-white'><Image src={'/images/Banner/playbutton.svg'} alt="button-image" className='mr-3' width={47} height={47} />How it work</button>
        </div>
    </div>

    <div className='col-span-5 lg:-m-48 order-1 lg:order-none'>
        <div className='arrowThree'></div>
        <div className='arrowFour'></div>
        <div className='arrowFive'></div>
        <Image src="/images/Banner/banner.png" alt="nothing" width={1280} height={731} />
        <div className='arrowSix'></div>
        <div className='arrowSeven'></div>
        <div className='arrowEight'></div>
    </div>
</div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
