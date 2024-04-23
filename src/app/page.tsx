'use client';

import { rootContracts } from "@/api/contracts/root.contract";
import { tsRest } from "@/api/frontend/ts-rest.client";
import { ClientInferResponseBody } from "@ts-rest/core";
import Link from "next/link";

type Post = ClientInferResponseBody<typeof rootContracts.posts.getPosts, 200>[number];

export default function Home() {
  const posts = tsRest.posts.getPosts.useQuery(['posts']);

  if (!posts.data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Home</h1>
      <h2>Posts</h2>
      <PostsList posts={posts.data.body} />
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