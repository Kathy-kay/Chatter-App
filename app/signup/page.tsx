import Image from 'next/image'
import signup from "@/public/signup.png"
import SignUp from '@/components/SignUp'

const page:React.FC = () => {
  return (
    <main className='bg-auth-800 w-full h-screen flex items-center justify-center '>
        <div className="bg-white w-5/6 mx-auto  rounded-lg flex border-slate-400">
          <div className="w-1/2 bg-auth-500 max-md:hidden flex items-center">
            <Image 
            src={signup}
            alt= "authenticaton image" 
            className='object-cover '
            priority
            />
          </div>
          <div className=" w-1/2  mx-auto py-14 max-md:w-full">
            <SignUp />
          </div>
        </div>
    </main>
  )
}

export default page

