import Posts from './components/Posts'

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='mt-12 mb-12 text-2xl text-center dark:text-white'>Hey 👋&nbsp;
      <span className='font-bold dark:text-white'>My name is Ilya</span>
      </p>
      <Posts/>
    </main>
  )
}
