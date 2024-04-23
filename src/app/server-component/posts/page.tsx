
import Link from "next/link";
import { trpc } from "@/api/frontend/trpc-server-component";
import { type RootRouterOutputs } from "@/api/types";
import { DebugJson } from "@/app/_components/debug-json";

type Post = RootRouterOutputs["posts"]["getPosts"][number];

export default async function Page() {
  const posts = await trpc().posts.getPosts();

  return (
    <div>
      <h1>Posts</h1>
      <PostsList posts={posts} />
      <DebugJson json={posts} />
    </div>
  );
}


const PostsList = ({ posts }: { posts: Post[]; }) => {
  return (
    <ul className="space-y-1">
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={`/server-component/posts/${post.id}`}
            className="underline"
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};