"use client"
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'Create Account',
        subheading: 'Sign up in a snap! Just enter your details to get the ball rolling.',
        hiddenpara: ' Provide your basic information and create your secure login. Our intuitive account setup process will guide you through every step, ensuring your journey starts smoothly.',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Upload Documents',
        subheading: 'Keep it secure. Upload required documents for a quick verification process.',
        hiddenpara: 'Security and trust are our top priorities. After creating your account, you will need to upload the necessary documents. This may include your business license, proof of identity, and other relevant paperwork',
    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Validation within 24h',
        subheading: 'Sit tight! We will confirm everything within 24 hours.',
        hiddenpara: 'Once we have your documents, our dedicated verification team will review them promptly. We are committed to a turnaround time of 24 hours or less. ',
    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: ' Start Accepting Payments',
        subheading: 'All set! Dive into our suite of payment tools and watch your business thrive',
        hiddenpara: 'You’ll have access to all our tools and services, enabling you to start accepting payments immediately.',
    },

]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>How it work</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>Welcome to effortless online payments – where your business growth is our mission.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                            <span className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;
