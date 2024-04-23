'use client';

import { tsRest } from "@/api/frontend/ts-rest.client";

type PageProps = {
  params: {
    postId: string;
  };
};

export default function Page({ params: { postId } }: PageProps) {
  const post = tsRest.posts.getPost.useQuery(['posts', '1'], { params: { id: postId } });
  if (post.isLoading) return <div>Loading...</div>;
  if (!post.data) return <div>Error</div>;
  return (
    <div>
      <h1>Post - {post.data.body.title}{postId}</h1>
      <p>postId - {postId}</p>
      <p>{post.data.body.content}</p>
    </div>
  );
}