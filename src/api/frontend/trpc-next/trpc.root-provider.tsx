'use client';

import { ReactQueryProvider } from "./react-query.provider";
import { trpc } from "./trpc.client";

export const TrpcRootProvider = trpc.withTRPC(
  ({ children }: { children: React.ReactNode; }) => (
    <ReactQueryProvider>
      {children}
    </ReactQueryProvider>
  ));