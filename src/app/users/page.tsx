'use client'

import PagePadding from '@/components/PagePadding'
import Spinner from '@/components/Spinner'
import { GET_USER_LIST } from '@/graphql/user/queries'
import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { userData } from '@/types/types'
import UserCard from '@/components/UserCard'

const Users = () => {
  const {loading,error,data} = useQuery(GET_USER_LIST)

  useEffect(()=>{
    if(error){
      console.log(error);
    }
  },[error])

  return (
    <main className=' w-full min-h-[calc(100vh-90px)]'>
      {loading ? 
      <section className='w-full min-h-[calc(100vh-90px)] flex justify-center items-center'>
        <Spinner/>
      </section>
      : data &&
      <PagePadding>
        <section className="w-full pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {data?.users?.map((item:userData)=><UserCard key={item?.id} data={item} />)}
        </section>
      </PagePadding>
      }
    </main>
  )
}

export default Users