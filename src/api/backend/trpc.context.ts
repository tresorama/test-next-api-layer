import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { cookies, headers } from "next/headers";

export type Context = {
  createContextName: string;
  headers: {
    [key: string]: string | string[] | undefined;
  };
  cookies: {
    [key: string]: string | string[] | undefined;
  };
};

// Use this in /pages/api/trpc/[trpc].ts
export const createContext_NextApiHandler = async (params: CreateNextContextOptions): Promise<Context> => {
  const { req, res } = params;
  return {
    createContextName: "createContext_NextApiHandler",
    headers: req.headers,
    cookies: req.cookies,
  };
};


// Use this in @/api/frontend/trpc-server-component/trpc.client.ts
export const createContext_NextRSC = async (): Promise<Context> => {
  return {
    createContextName: "createContext_NextRSC",
    headers: Object.fromEntries(headers().entries()),
    cookies: (() => {
      const c = cookies().getAll();
      return Object.fromEntries(c.map((cookie) => [cookie.name, cookie.value]));
    })(),
  };
};