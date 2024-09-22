import { userData } from '@/types/types';
import React from 'react'

interface UserCardProps {
    data: userData;
}

const UserCard = ({data}:UserCardProps) => {

  return (
    <div className=' flex flex-col justify-start items-start my-2 sm:flex-row bg-Primary px-3 py-2 rounded'>
        <h2>{data?.name}</h2>
        <span className=' hidden sm:inline-block'>-</span>
        <h3>{data?.id}</h3>
    </div>
  )
}

export default UserCard