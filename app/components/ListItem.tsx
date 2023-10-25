import Link from 'next/link';
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost
}

export default function ListItem({post}: Props) {
  const {id, title, date} = post
  const formattedDate = getFormattedDate(date)
  return (
    <li className='mt-4 text-xl text-white/90'>
      <div className='border-l-2 border-white/40 p-3 hover:border-white'>
        <Link className='text-white' href={`/posts/${id}`}>{title}</Link>
        <br/>
        <p className='text-sm mt-1'>{formattedDate}</p>
      </div>
    </li>
  )
}