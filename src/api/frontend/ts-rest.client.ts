import { initQueryClient } from "@ts-rest/react-query";
import { rootContracts } from "@/api/contracts/root.contract";

// `contract` is the AppRouter returned by `c.router`
export const tsRest = initQueryClient(rootContracts, {
  baseUrl: 'http://localhost:3000/api/',
  baseHeaders: {},
});
