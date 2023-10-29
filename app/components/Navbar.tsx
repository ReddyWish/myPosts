import Link from "next/link";
import { FaGithub, FaLaptop, FaLinkedin } from 'react-icons/fa'
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className='bg-zinc-950 p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className='md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <Link href='/' className='text-white/90 no-underline hover:text-white'>R&W</Link>
        <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-2xl lg:text-3xl'>
          <Link className='text-white/90 hover:text-white' href='https://github.com/ReddyWish'>
            <FaGithub/>
          </Link>
          <Link className='text-white/90 hover:text-white' href=''>
            <FaLaptop/>
          </Link>
          <Link className='text-white/90 hover:text-white' href='https://www.linkedin.com/in/ilya-shuvatov-51b37624a/'>
            <FaLinkedin/>
          </Link>
        </div>
      </div>
    </nav>
  );
}
