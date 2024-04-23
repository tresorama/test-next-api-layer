import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { router } from '../trpc.init';
import { postsRouter } from "./post/post.router";
import { sensitiveRouter } from './sensistive/sensitive.router';

export const rootRouter = router({
  posts: postsRouter,
  sensitive: sensitiveRouter,
});

// Export type router type signature
export type RootRouter = typeof rootRouter;
export type RootRouterInputs = inferRouterInputs<RootRouter>;
export type RootRouterOutputs = inferRouterOutputs<RootRouter>;