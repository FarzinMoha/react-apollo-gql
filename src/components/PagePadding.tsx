import { reactNode } from '@/types/types'
import React from 'react'

const PagePadding = ({children}:reactNode) => {
  return (
    <div className='px-4 pt-5'>
        {children}
    </div>
  )
}

export default PagePadding