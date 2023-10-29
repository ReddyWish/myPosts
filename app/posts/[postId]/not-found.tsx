import Link from 'next/link'
export default function NotFound() {
  return (
    <div className='text-center'>
      <h1>The requested post does not exist</h1>
      <Link href='/'>Back to home</Link>
    </div>
  )
}