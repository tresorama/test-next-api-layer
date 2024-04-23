import { initTRPC } from '@trpc/server';
import { Context } from './trpc.context';
import superjson from 'superjson';


/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
export const t = initTRPC
  .context<Context>()
  .create({ transformer: superjson });

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure.use(
  function logger({ ctx, next }) {
    console.log("public Procedure - invoked");
    debugger;

    return next({ ctx });
  }
);
export const protectedProcedure = t.procedure.use(
  function isAuthed({ ctx, next }) {
    console.log("protected Procedure - invoked");
    debugger;

    // check if requests is autorized or not
    const isAuthed = Math.random() > 0.5;
    console.log("protected Procedure - isAuthed (randomized)", isAuthed);

    // abort if not authorized
    if (!isAuthed) {
      throw new Error('Not authenticated');
    }

    // if authorized, add user to context so trpc procedure can access it
    const user = {
      name: 'John Doe',
      email: 'qfHk0@example.com',
    };

    return next({
      ctx: {
        ...ctx,
        user,
      }
    });
  }
);