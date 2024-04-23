export const Badge = ({ children }: { children: React.ReactNode; }) => {
  return <div className="px-2 py-1 inline-block text-xs rounded bg-neutral-50 dark:bg-neutral-800">{children}</div>;
};
