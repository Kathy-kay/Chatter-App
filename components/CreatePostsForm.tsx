import React from 'react'

const CreatePostsForm = () => {
  return (
    <div className='py-32 px-8 sm:px-20'>
      <h2 className='text-2xl font-bold'>Create Post</h2>
      <form action=""
      className='mt-20 flex flex-col w-full gap-5 max-w-[1000px] mx-auto'>
        <input type="text" placeholder='New Post title here...'
        className='border border-auth-800 rounded-md p-10
        '/>
        <textarea placeholder='Write your post content here...'
        className='p-10 border border-auth-800 rounded-md mt-8'
        ></textarea>
        <button className='bg-auth-500 px-7 py-4 w-[100px] 
        text-white rounded-md text-lg flex items-center justify-center'
        >Publish</button>
      </form>
    </div>
  )
}

export default CreatePostsForm
