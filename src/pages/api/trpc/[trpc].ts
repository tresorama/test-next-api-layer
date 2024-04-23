import * as trpcNext from '@trpc/server/adapters/next';
import { rootRouter } from '@/api/backend/root.router';

// export API handler
// @link https://trpc.io/docs/v11/server/adapters
export default trpcNext.createNextApiHandler({
  router: rootRouter,
  createContext: () => ({}),
});