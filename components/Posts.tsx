'use client'
import useSWR from 'swr'
// import { usePosts } from '@/store'
import Link from 'next/link'
import { getAllPosts } from '@/services/getPosts'
// import { useEffect } from 'react'
// import { shallow } from 'zustand/shallow'

const Posts = () => {
  const { data: posts, isLoading } = useSWR('posts', getAllPosts)
  // const [posts, loading, getAllPosts] = usePosts(
  //   (state) => [state.posts, state.loading, state.getAllPosts],
  //   shallow // shallow чтобы лишний раз не перерэндорировалась
  // )

  // useEffect(() => {
  //   getAllPosts()
  // }, [getAllPosts])
  // return loading ? (
  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Posts
