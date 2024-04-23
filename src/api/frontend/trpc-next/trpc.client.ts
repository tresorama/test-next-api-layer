import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { getBaseUrl } from '@/api/utils/get-base-url';
import superjson from 'superjson';
import type { RootRouter } from '@/api/backend/root.router';
export type { RootRouterInputs, RootRouterOutputs } from "@/api/backend/root.router";


export const trpc = createTRPCNext<RootRouter>({
  config: (opts) => {
    return {
      transformer: superjson,
      links: [
        httpBatchLink({
          transformer: superjson,
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @link https://trpc.io/docs/v11/ssr
           **/
          url: `${getBaseUrl()}/api/trpc`,
          // You can pass any HTTP headers you wish here
          headers: async () => {
            return {
              // authorization: getAuthCookie(),
            };
          },
        }),
      ],
    };
  },
  /**
   * @link https://trpc.io/docs/v11/ssr
   **/
  ssr: false,
});