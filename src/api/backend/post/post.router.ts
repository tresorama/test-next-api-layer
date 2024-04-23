import { publicProcedure, router } from "@/api/backend/trpc.init";
import { z } from "zod";

type Post = {
  id: string;
  title: string,
  content: string,
};
const db = {
  post: {
    items: [
      {
        id: '1',
        title: 'Post 1',
        content: 'Body 1',
      },
      {
        id: '2',
        title: 'Post 2',
        content: 'Body 2',
      },
      {
        id: '3',
        title: 'Post 3',
        content: 'Body 3',
      },
    ] as Post[],
    get(id: string) {
      return db.post.items.find((post) => post.id === id);
    },
    getAll() {
      return db.post.items;
    },
    create(post: Omit<Post, "id">) {
      const id = Math.random().toString(16).slice(2);
      const newPost = { ...post, id };
      db.post.items.push(newPost);
      return newPost;
    },
  }
};

// `contract` is the AppRouter returned by `c.router`
export const postsRouter = router({
  //
  //
  createPost: publicProcedure
    .input(z.object({
      title: z.string(),
      content: z.string(),
    }))
    .mutation(async ({ input }) => {
      const newPost = db.post.create(input);
      return newPost;
    }),
  //
  //
  getPosts: publicProcedure
    .query(async () => db.post.getAll()),
  //
  //
  getPost: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const post = db.post.get(input.id);
      if (!post) {
        // TODO: ???
      }
      return post;
    })
});