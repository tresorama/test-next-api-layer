// pages/api/[...ts-rest].tsx
import { rootContracts } from "@/api/contracts/root.contract";
import { rootRouter } from "@/api/backend/root.router";
import { createNextRouter } from "@ts-rest/next";


// Actually initiate the collective endpoints
export default createNextRouter(rootContracts, rootRouter);