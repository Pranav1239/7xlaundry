import Link from 'next/link'
import React from 'react'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

const Footer = () => {
  return (
    <>
    <div className='w-full py-8 bg-gray-900'>
        <div className='max-w-[1300px] m-auto'>
            <div className='flex flex-wrap justify-between  items-center'>
                <div className='flex-[1]'>
                    <p className='font-semibold capitalize text-white text-xl'>Why Choose <span className='font-bold text-[#416D19]'>7xLaundry</span> For Laundry Service In Jaipur</p>
                </div>
                <div className='flex-[1]'>
                    <p className='text-white'>
Step into the world of luxury laundry care, where tranquility meets eco-consciousness. Our esteemed laundry service boasts a legion of delighted patrons, all entrusting us with their garments care. With a commitment to excellence, we employ cutting-edge technology to safeguard your attire, ensuring a pristine finish without compromise. Experience the pinnacle of service, where quality and affordability converge seamlessly.</p>
                    </div>
            </div>
        </div>
    </div>
    <div className='w-full py-8 bg-gray-950'>
        <div className='max-w-[1300px] m-auto'>
            <div className='flex flex-wrap gap-5'>
                <div className='flex-[2] bg-gray-900 rounded-xl p-6'>
                    <h1 className='text-lg font-bold text-white'>About</h1>
                    <br />
                    <p className='text-sm text-white'>
Ever wondered about the sweat and toil behind that dazzling whiteness? Enzyme soaks, hot water cleans, bluing... These are the unsung heroes of laundry day. But fear not! With 7xLaundry, maintaining pristine whites is as effortless as flipping channels.</p>
                </div>
                <div className='flex-[1] bg-gray-900 rounded-xl p-6'>
                <h1 className='text-lg font-bold text-white'>Information</h1>
                    <div className='flex flex-wrap flex-col text-white gap-2 mt-4'>
                    <Link href="/"><ArrowRightAltOutlinedIcon /> Terms & Condition</Link>
                    <Link href="/"><ArrowRightAltOutlinedIcon /> Privacy Policy</Link>
                    <Link href="/"><ArrowRightAltOutlinedIcon /> Refund Policy</Link>
                    <Link href="/"><ArrowRightAltOutlinedIcon /> User and Data Policy</Link>
                    </div>
                </div>
                <div className='flex-[1] bg-gray-900 rounded-xl p-6'>
                <h1 className='text-lg font-bold text-white'>General</h1>
                    <div className='flex flex-wrap flex-col text-white gap-2 mt-4'>
                    <Link href="/"><ArrowRightAltOutlinedIcon /> About</Link>
                    <Link href="/"><ArrowRightAltOutlinedIcon /> Services</Link>
                    <Link href="/"><ArrowRightAltOutlinedIcon /> Our Services</Link>
                    <Link href="/"><ArrowRightAltOutlinedIcon /> Price List</Link>
                    <Link href="/"><ArrowRightAltOutlinedIcon /> Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer