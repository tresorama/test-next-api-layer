'use client';

import { RootRouterOutputs, trpc } from "@/api/frontend/trpc-next/trpc.client";
import Link from "next/link";

type Post = RootRouterOutputs['posts']['getPosts'][number];

export default function Home() {
  const posts = trpc.posts.getPosts.useQuery();

  if (!posts.data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Home</h1>
      <h2>Posts</h2>
      <PostsList posts={posts.data} />
      {/* <pre>
        {JSON.stringify(posts, null, 2)}
      </pre> */}
    </div>
  );
}


const PostsList = ({ posts }: { posts: Post[]; }) => {
  return <ul className="space-y-1">
    {posts.map((post) => (
      <li key={post.id}>
        <Link href={`/posts/${post.id}`} className="underline">{post.title}</Link>
      </li>
    ))}
  </ul>;
};