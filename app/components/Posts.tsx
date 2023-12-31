import { getPostsMeta } from "@/lib/posts";
import ListItem from "@/app/components/ListItem";

export default async function Posts() {
  const posts = await getPostsMeta()

  console.log(posts)

  if (!posts) {
    return <p className='mt-10 text-center'>No posts yet</p>
  }

  return (
    <section className='mt-6 mx-auto max-w-2xl'>
      <h2 className='text-2xl font-bold text-white/90 hover:text-white'>My Blog</h2>
      <ul className='w-full list-none p-0'>
        {posts.map(post => (
          <ListItem key={post.id} post={post}/>
        ))}
      </ul>
    </section>
  );
}

