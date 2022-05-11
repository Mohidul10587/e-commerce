import Link from 'next/link'
import { FaBars, FaBlog, FaHome,  FaPhone,  FaServicestack,  FaTimes, FaUser } from 'react-icons/fa'
import { useState } from 'react'



export default function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const handlesidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <div className='mb-24'>
      <div   className="bg-gray-900 fixed z-10 flex h-14 inset-x-0 items-center justify-between px-6 py-10 shadow-lg text-white top-0">

        <div> <Link href='/'>
          <a href=""><h1 className='text-2xl'> Back-Pack</h1></a></Link>
         
        </div>

        <ul className='md:flex hidden'>
        <li style={{ listStyle: 'none' }}>
            <Link href='/'>
              <a className='hover:underline  inline-flex items-center px-4 py-2 transition w-full '>
                
                Home </a>
            </Link>
          </li>
          <li style={{ listStyle: 'none' }}>
            <Link href='/About'>
              <a className='hover:underline  inline-flex items-center px-4 py-2 transition w-full '>
              
               
                About Us </a>
            </Link>
          </li>
          <li style={{ listStyle: 'none' }}>
            <Link href='/Contact'>
              <a className='hover:underline  inline-flex items-center px-4 py-2 transition w-full'>
                
                Contact </a>
            </Link>
          </li>
          <li style={{ listStyle: 'none' }} >
            <Link href='/Service'>
              <a className='hover:underline  inline-flex items-center px-4 py-2 transition w-full '>               
                
                Service </a>
            </Link>
          </li>        
          <li style={{ listStyle: 'none' }} >
            <Link href='/blogs'>
              <a className='hover:underline  inline-flex items-center px-4 py-2 transition w-full '>
          
                Blog </a>
            </Link>
          </li>
        </ul>
     
        <button className="md:hidden p-2 rounded-full transition hover:bg-white hover:text-gray-800" onClick={handlesidebar}>
          <FaBars></FaBars>
        </button>
      </div>
<p style={{color:'chocolate'}}></p>
      <div>
        <div  className={sidebar ? 'cursor-pointer fixed z-10 inset-0 opacity-70 visible' : 'hidden opacity-0'} onClick={handlesidebar}></div>

        <div  className={sidebar ? 'bg-white duration-300 fixed z-10 inset-y-0 py-4 right-0 transition-right w-64' : 'bg-white duration-500 fixed z-10 inset-y-0 py-4 -right-full transition-right w-64'}>
          <button className='absolute -left-8 p-1 rounded-full text-gray-500 top-4 transition hover:text-red-400' onClick={handlesidebar}>
            <FaTimes></FaTimes>
          </button>

          <ul>
          <li style={{ listStyle: 'none' }} onClick={handlesidebar}>
            <Link href='/'>
              <a className='bg-gray-100 font-medium inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100'>
                <FaHome className='mr-3'></FaHome>
                Home </a>
            </Link>
          </li>
          <li style={{ listStyle: 'none' }} onClick={handlesidebar}>
            <Link href='/About'>
              <a className='inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100'>
              <FaUser className='mr-3'></FaUser>
               
                About Us </a>
            </Link>
          </li>
          <li style={{ listStyle: 'none' }} onClick={handlesidebar}>
            <Link href='/Contact'>
              <a className='inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100'>
                <FaPhone className='mr-3'></FaPhone>
                Contact </a>
            </Link>
          </li>
          <li style={{ listStyle: 'none' }} onClick={handlesidebar}>
            <Link href='/Service'>
              <a className='inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100'>               
                <FaServicestack className='mr-3'></FaServicestack>
                Service </a>
            </Link>
          </li>        
          <li style={{ listStyle: 'none' }} onClick={handlesidebar}>
            <Link href='/blogs'>
              <a className='inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100'>
              <FaBlog className='mr-3'></FaBlog>
                Blog </a>
            </Link>
          </li>
          </ul>
        </div>
      </div>

    </div>
  )
}