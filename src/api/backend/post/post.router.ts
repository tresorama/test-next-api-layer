import { postContract } from "@/api/contracts/post/post.contract";
import { createNextRoute } from "@ts-rest/next";

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
export const postsRouter = createNextRoute(postContract, {
  createPost: async (args) => {
    const newPost = db.post.create(args.body);

    return {
      status: 201,
      body: newPost,
    };
  },
  getPosts: async () => {
    return {
      status: 200,
      body: db.post.getAll(),
    };
  },
  getPost: async (args) => {
    const post = db.post.get(args.params.id);
    if (!post) {
      return {
        status: 404,
        body: 'Post with id ' + args.params.id + ' not found',
      };
    }
    return {
      status: 200,
      body: post,
    };
  },
});