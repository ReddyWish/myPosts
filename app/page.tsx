import Posts from './components/Posts'
import MyProfilePic from "@/app/components/MyProfilePic";

export const revalidate = 86400

export default function Home() {
  return (
    <div className='mx-auto'>
      <MyProfilePic/>
      <p className='mt-12 mb-12 text-2xl text-center dark:text-white'>Hey 👋&nbsp;
      <span className='font-bold dark:text-white'>My name is Ilya</span>
      </p>
      <Posts/>
    </div>
  )
}
