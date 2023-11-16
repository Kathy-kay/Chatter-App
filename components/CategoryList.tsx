import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  return (
    <div className='flex gap-5 mt-10 sm:ml-20 items-center text-white'>
      <Link href={"/tag"}
      className='bg-auth-500 px-3 p-1 rounded-sm'
      >Programming</Link>
      <Link href={"/tag"}
      className='bg-auth-500 px-3 py-1 rounded-sm'
      >Javascript</Link>
      <Link href={"/tag"}
      className='bg-auth-500 px-3 py-1 rounded-sm'
      >Self Improvement</Link>
      <Link href={"/tag"}
      className='bg-auth-500 px-3 py-1 rounded-sm'
      >React</Link>
    </div>
  )
}

export default CategoryList
