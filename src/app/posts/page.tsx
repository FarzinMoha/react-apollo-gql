'use client'
import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_POSTS } from '@/graphql/post/queries'
import PagePadding from '@/components/PagePadding'
import { postData } from '@/types/types'
import PostCard from '@/components/PostCard'
import Spinner from '@/components/Spinner'

const Posts = () => {
  const {loading,error,data} = useQuery(GET_POSTS)

  useEffect(()=>{
    if(error){
      console.log(error);
    }
  },[error])

  return (
    <main className=' w-full min-h-[calc(100vh-90px)]'>
      {loading ? 
      <section className='w-full min-h-[calc(100vh-90px)] flex justify-center items-center'>
        <Spinner /> 
      </section>
      : data &&
      <PagePadding>
      <section className="w-full pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {data?.posts?.map((item:postData)=><PostCard key={item?.id} data={item} />)}
        </section>
      </PagePadding>
    }

    </main>
  )
}

export default Posts