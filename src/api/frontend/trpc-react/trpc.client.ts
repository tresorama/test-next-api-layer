import { createTRPCReact } from '@trpc/react-query';
import { type RootRouter } from '../../backend/root.router';

export const trpc = createTRPCReact<RootRouter>();