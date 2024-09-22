import { showItemProps } from '@/types/types'
import React from 'react'

const ShowItem = ({title,value}:showItemProps) => {
  return (
    <h2 className=' font-bold text-base capitalize'>{title}:<span className=' text-sm font-normal lowercase first-letter:uppercase'>{` ${value}`}</span></h2>
  )
}

export default ShowItem