import Link from 'next/link'
import React from 'react'
import { Categories } from '@/types';


const getCategories = async () : Promise<Categories[] | null> =>{
  try{
    const res = await fetch(` ${process.env.NEXTAUTH_URL}/api/categories`);
    if(res.ok){
      const categories = await res.json();
      
      return categories
    }
  }
  catch(error){
    console.log(error);
  
  }
  return null
}

const CategoryList = async () => {
  const categories = await getCategories();
  return (
    <div className='flex gap-5 pt-10 md:px-20 px-6 flex-wrap items-center  font-poppin text-sm'>
      {categories &&
        categories.map((category: any )=> (
          <Link key={category.id}
            href={`/categories/${category.catName}`}
            className='bg-auth-500 px-4 p-1 rounded-md text-white'
          >{category.catName}</Link>
        ))
      }
    </div>
  )
}

export default CategoryList

