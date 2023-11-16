import React from 'react'

const CreatePostsForm = () => {
  return (
    <div className='py-32 px-8 sm:px-20'>
      <h2 className='text-2xl font-bold'>Create Post</h2>
      <form action=""
      className='mt-20 flex flex-col px-40'>
        <input type="text" placeholder='New Post title here...'
        className='border border-auth-800 rounded-md p-10
        '/>
        <textarea placeholder='Write your post content here...'
        className='p-10 border border-auth-800 rounded-md mt-8'
        ></textarea>
      </form>
    </div>
  )
}

export default CreatePostsForm
