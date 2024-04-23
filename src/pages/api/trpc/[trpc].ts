import * as trpcNext from '@trpc/server/adapters/next';
import { rootRouter } from '@/api/backend/routers/root.router';
import { createContext_NextApiHandler } from '@/api/backend/trpc.context';

// export API handler
// @link https://trpc.io/docs/v11/server/adapters
export default trpcNext.createNextApiHandler({
  router: rootRouter,
  createContext: createContext_NextApiHandler,
});