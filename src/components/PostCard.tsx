import { postData } from '@/types/types'
import Link from 'next/link';
import React from 'react'

interface PostCardProps {
    data: postData;
}

const PostCard = ({data}:PostCardProps) => {
  return (
    <Link href={`/posts/${data?.id}`} className="w-full flex flex-col justify-start items-center bg-Primary py-2 px-3 rounded">
      <div className="w-full h-[150px] bg-black" />
      <h2 className="text-base font-bold">{data?.title}</h2>
      <h3 className="truncate self-start w-[90%]">{data?.body}</h3>
    </Link>
  )
}

export default PostCard