import { trpc } from "@/api/frontend/trpc-server-component";
import { DebugJson } from "@/app/_components/debug-json";

export default async function Page() {
  const sensitiveData = await trpc().sensitive.getSensitiveData();

  return (
    <div>
      <h1>Sensitive</h1>
      <DebugJson json={sensitiveData} />
    </div>
  );
}