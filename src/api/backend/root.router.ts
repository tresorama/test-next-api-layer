import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { postsRouter } from "./post/post.router";
import { router } from './trpc.init';

export const rootRouter = router({
  posts: postsRouter,
});

// Export type router type signature
export type RootRouter = typeof rootRouter;
export type RootRouterInputs = inferRouterInputs<RootRouter>;
export type RootRouterOutputs = inferRouterOutputs<RootRouter>;