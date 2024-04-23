'use client';

import { trpc } from "@/api/frontend/trpc-next/trpc.client";

type PageProps = {
  params: {
    postId: string;
  };
};

export default function Page({ params: { postId } }: PageProps) {
  const post = trpc.posts.getPost.useQuery({ id: postId });
  if (post.isLoading) return <div>Loading...</div>;
  if (!post.data) return <div>Error</div>;
  return (
    <div>
      <h1>Post - {post.data.title}{postId}</h1>
      <p>postId - {postId}</p>
      <p>{post.data.content}</p>
    </div>
  );
}