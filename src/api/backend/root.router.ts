import { createNextRoute } from "@ts-rest/next";
import { postsRouter } from "./post/post.router";
import { rootContracts } from "@/api/contracts/root.contract";

export const rootRouter = createNextRoute(rootContracts, {
  posts: postsRouter,
});