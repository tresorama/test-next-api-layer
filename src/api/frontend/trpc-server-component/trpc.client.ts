import { rootRouter } from '@/api/backend/routers/root.router';
import { createContext_NextRSC } from '@/api/backend/trpc.context';
import { t } from '@/api/backend/trpc.init';

const createCaller = t.createCallerFactory(rootRouter);
export const trpc = () => createCaller(createContext_NextRSC);
