import { createTRPCReact } from '@trpc/react-query';
import { type RootRouter } from '../../../backend/routers/root.router';

export const trpc = createTRPCReact<RootRouter>();