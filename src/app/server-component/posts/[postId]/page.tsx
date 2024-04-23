import { notFound } from "next/navigation";
import { trpc } from "@/api/frontend/trpc-server-component";
import { DebugJson } from "@/app/_components/debug-json";

type PageProps = {
  params: {
    postId: string;
  };
};

export default async function Page({ params: { postId } }: PageProps) {
  const post = await trpc().posts.getPost({ id: postId });
  if (!post) return notFound();

  return (
    <div>
      <h1>Post - {post.title}{postId}</h1>
      <p>id - {postId}</p>
      <p>{post.content}</p>
      <DebugJson json={post} />
    </div>
  );
}