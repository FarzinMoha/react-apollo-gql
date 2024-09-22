'use client'

import PagePadding from '@/components/PagePadding';
import ShowItem from '@/components/ShowItem';
import Spinner from '@/components/Spinner';
import { GET_SINGLE_POST } from '@/graphql/post/queries';
import { commentType } from '@/types/types';
import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

const Post = () => {
  const params = useParams()
  const postId = params.id
  const {loading,data,error} = useQuery(GET_SINGLE_POST,{variables:{id:postId},skip:!postId})
  
  useEffect(()=>{
    if(error){
      console.log(error);
    }
  },[error])

  return (
    <main className='w-full min-h-[calc(100vh-90px)]'>
        {loading ? 
        <section className='w-full min-h-[calc(100vh-90px)] flex justify-center items-center'>
          <Spinner/>
        </section> :
        data &&
          <PagePadding>
            <section className='w-full flex flex-col justify-start items-start'>
              <ShowItem title={'title'} value={data?.post?.title} />
              <ShowItem title={'body'} value={data?.post?.body} />
              <ShowItem title={'name'} value={data?.post?.author?.name} />
              <ShowItem title={'email'} value={data?.post?.author?.email} />
              <ShowItem title={'comments'} value={''} />
              {data?.post?.comments?.map((item:commentType,index:number)=><h3 key={index} className=' text-sm font-normal'>{item?.text}</h3>)}
            </section>
          </PagePadding>
      }
    </main>
  );
};

export default Post;
