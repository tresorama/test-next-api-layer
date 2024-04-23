'use client';

import { RootRouterOutputs, trpc } from "@/api/frontend/trpc-client-component/trpc-next/trpc.client";
import { DebugJson } from "@/app/_components/debug-json";
import Link from "next/link";

type Post = RootRouterOutputs['posts']['getPosts'][number];

export default function Page() {
  const posts = trpc.posts.getPosts.useQuery();

  if (!posts.data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Posts</h1>
      <PostsList posts={posts.data} />
      <DebugJson json={posts} />
    </div>
  );
}

const PostsList = ({ posts }: { posts: Post[]; }) => {
  return (
    <ul className="space-y-1">
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/client-component/posts/${post.id}`} className="underline">{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};