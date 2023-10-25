import React from 'react';
import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData()

  return posts.map((post) => ({
    postId: post.id
  }))
}

export function generateMetadata({ params } : { params: { postId: string } }) {

  const posts = getSortedPostsData()
  const {postId} = params

  const post = posts.find(post => post.id === postId)

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title,
  }

}

export default async function Post({ params } : { params: { postId: string } }) {

  const posts = getSortedPostsData()
  const { postId } = params

  if (!posts.find(post => post.id === postId)) {
    return notFound()
  }

  const { title, date, contentHtml } = await getPostData(postId)

  const pubDate = getFormattedDate(date)

  return (
    <main className='px-6 prose prose-xl prose-slate mx-auto text-white dark:prose-invert'>
      <h1 className='text-2xl mt-4 mb-0 text-white'>{title}</h1>
      <p className='mt-0 text-white'>
        {pubDate}
      </p>
      <article>
        <section className='text-white/90' dangerouslySetInnerHTML={{ __html: contentHtml }}></section>
          <p>
            <Link href='/'>Back to home</Link>
          </p>
      </article>
    </main>
  );
}