import React from 'react'
import { headerItem } from '@/types/types'
import Link from 'next/link'

const HeaderItem = ({children,path}:headerItem) => {
  return (
    <li className=' pl-3'>
        {path ? 
            <Link className=' capitalize text-sm cursor-pointer text-white px-3 sm:px-9 py-2 rounded hover:bg-Secondary hover:text-black duration-200' href={path}>{children}</Link>
        :
            <h2 className=' capitalize text-sm cursor-pointer text-white px-3 sm:px-9 py-2 rounded hover:bg-Secondary hover:text-black duration-200'>{children}</h2>
        }
    </li>
  )
}

export default HeaderItem