import Image from 'next/image'
import signup from "@/public/signup.png"
import SignUp from '@/components/SignUp'

const page:React.FC = () => {
  return (
    <main className='bg-auth-800 w-full h-screen flex items-center justify-center '>
        <div className="bg-white w-5/6 mx-auto h-5/6 rounded-lg flex border-slate-400">
          <div className="w-1/2 bg-auth-500">
            <Image 
            src={signup}
            alt= "authenticaton image" 
            priority
            />
          </div>
          <div className="w-1/2 mx-auto pt-14 ">
            <SignUp />
          </div>
        </div>
    </main>
  )
}

export default page

