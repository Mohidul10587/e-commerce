
import Link from 'next/link'
import { FaFacebookSquare, FaInstagramSquare, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa'



export default function Footer() {
  return (

    <div className='mt-24 '>

      <div className='bg-black flex p-3'>
        <div className='w-1/2 p-6 text-white border-r'>

          <p className='text-xl'>Address</p>
          <p className='w-24 h-0.5 bg-white mt-4  mb-4'></p>
          <p className='text-gray-400'>
          Gobindogong, Gaibandha, Bangladesh. <br />
Phone : 01704710587 <br />
Email : mohid10587@gmail.com</p>
        </div>
        <div className='w-1/2 px-6 pt-6'>


          <div className='text-gray-400'>
            <h1 className='text-xl text-white'>Explore On</h1>
            <p className='w-24 h-0.5 bg-white mt-4  mb-4'></p>
            <p className='hover:text-white'><Link href='/'>Home</Link></p>
            <p className='hover:text-white'><Link href='/Contact'>Contact</Link></p>
            <p className='hover:text-white'><Link href='/About'>About</Link></p>
            <p className='hover:text-white'><Link href='/Service'>Service</Link></p>
            <p className='hover:text-white'><Link href='/blogs/'>Blogs</Link></p>

          </div>
          <p className='text-white text-xl mt-4'>Join our commiunity</p>
          <p className='w-32 h-0.5 bg-white  mt-4 mb-5'></p>

          <div className='flex'>
            <FaFacebookSquare className='hover:bg-white bg-gray-400 text-black border-1  mr-2 text-2xl'></FaFacebookSquare>
            <FaTwitterSquare className='hover:bg-white bg-gray-400 text-black border-1  mr-2 text-2xl'></FaTwitterSquare>
            <FaInstagramSquare className='hover:bg-white bg-gray-400 text-black border-1  mr-2 text-2xl'></FaInstagramSquare>
            <FaPinterestSquare className='hover:bg-white bg-gray-400 text-black border-1  mr-2 text-2xl'></FaPinterestSquare>
          </div>
        </div>
      </div>
      <div className='bg-black text-white text-center py-3 border-t'>
        <p>&copy; Copyright By<span style={{ fontStyle: 'italic' }}> Abu Sayeed Mandal</span></p>
      </div>

    </div>
  )
}
