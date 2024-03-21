import Image from 'next/image'
import Link from 'next/link'
import Image1 from '../../../public/select (1).png';
import Image2 from '../../../public/select (2).png';
import Image3 from '../../../public/select (3).png';
import Image4 from '../../../public/select (4).png';
const About = () => {
  return (
    <div className='bg-gray-100 py-10'>
        <div className='max-w-[1200px] m-auto'>
        <div className='flex flex-wrap justify-center items-center'>
        <div className='flex-[1]'>
            <div className='flex flex-wrap justify-center'>
                <img src='https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded-lg' />
            </div>
        </div>
        <div className='flex-[1]'>
        <div className='flex justify-around items-center'>
            <div className='flex flex-wrap justify-end gap-10'>
                <Link href='/' className='transiton w-[160px] bg-white h-[160px] flex-col flex justify-center items-center rounded-lg shadow-lg hover:shadow-none'>
                    <Image src={Image1} alt='Image' width={80} height={80} />
                    <p className='font-bold'>Dry Clean</p>
                </Link>
                <Link href='/' className='transiton w-[160px] bg-white h-[160px] flex-col flex justify-center items-center rounded-lg shadow-lg hover:shadow-none'>
                    <Image src={Image2} alt='Image' width={80} height={80} />
                    <p className='font-bold'>Dry Clean</p>
                </Link>
            </div>
            <div className='flex flex-wrap justify-around gap-10'>
                <Link href='/' className='transiton w-[160px] bg-white h-[160px] flex-col flex justify-center items-center rounded-lg shadow-lg hover:shadow-none'>
                    <Image src={Image3} alt='Image' width={80} height={80} />
                    <p className='font-bold'>Dry Clean</p>
                </Link>
                <Link href='/' className='transiton w-[160px] bg-white h-[160px] flex-col flex justify-center items-center rounded-lg shadow-lg hover:shadow-none'>
                    <Image src={Image4} alt='Image' width={80} height={80} />
                    <p className='font-bold'>Dry Clean</p>
                </Link>
            </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About