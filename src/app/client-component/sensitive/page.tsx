'use client';

import { trpc } from "@/api/frontend/trpc-client-component";
import { DebugJson } from "@/app/_components/debug-json";

export default function Page() {
  const sensitiveData = trpc.sensitive.getSensitiveData.useQuery();

  if (!sensitiveData.data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Sensitive Data</h1>
      <DebugJson json={sensitiveData} />
    </div>
  );
}
