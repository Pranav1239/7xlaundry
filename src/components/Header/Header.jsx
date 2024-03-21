import Link from 'next/link'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import LogoMain from '../../../public/logo.png';
import Image from 'next/image';
const Header = () => {
  return (
    <div className='w-full py-6 shadow-lg bg-white'>
        <div className='m-auto max-w-[1350px]'>
            <div className='flex flex-row flex-wrap justify-center items-center'>
                <div className='flex-[1]'>
                    <Image src={LogoMain} alt="Main Logo" width={125} height={35}/>
                </div>
                <div className='flex-[1]'>
                    <div className='flex flex-wrap flex-row justify-end gap-10'>
                        <div className='flex flex-row gap-8'>
                            <Link href='/' className='font-semibold hover:text-[#124076]'>Home</Link>
                            <Link href='/' className='font-semibold hover:text-[#124076]'>About Us</Link>
                            <Link href='/' className='font-semibold hover:text-[#124076]'>Our Services</Link>
                            <Link href='/' className='font-semibold hover:text-[#124076]'>Price List</Link>
                        </div>
                        <div>
                            <Link href='/' className='transition bg-white border-[#333] border-[1px] rounded-sm text-gray-800 mr-4 font-semibold py-2 px-4 hover:bg-gray-900 hover:text-white'>Support <HeadphonesIcon /></Link>
                            <Link href='/' className='transition bg-[#416D19] font-semibold text-white py-2 px-4 rounded-sm hover:bg-gray-900'>Login <ArrowRightAltIcon /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header