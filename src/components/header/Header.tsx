import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'

const Header = () => {
  return (
    <header className='w-full'>
      <nav className=' w-full h-[60px] bg-Primary flex justify-center items-center'>
        <Image src={'/assets/logo.png'} alt='Logo' width={40} height={40} />
        <ul className='flex justify-center items-center list-none'>
            <HeaderItem path='/'>home</HeaderItem>
            <HeaderItem path='/posts'>posts</HeaderItem>
            <HeaderItem path='/users'>users</HeaderItem>
        </ul>
      </nav>
    </header>
  )
}

export default Header