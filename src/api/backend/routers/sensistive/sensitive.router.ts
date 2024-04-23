import { protectedProcedure, router } from "../../trpc.init";

export const sensitiveRouter = router({
  getSensitiveData:
    protectedProcedure.query(async (params) => {
      const { ctx } = params;
      return { ctx };
    })
});