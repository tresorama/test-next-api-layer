'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathnname = usePathname();

  return (
    <header className="p-2 border-b">
      <nav className="flex flex-col gap-2 text-xs underline">
        <HeaderLink href="/" isActive={pathnname === '/'}>Home</HeaderLink>
        <HeaderLink href="/client-component/posts" isActive={pathnname?.startsWith('/client-component/posts')}>Client Componenet - posts</HeaderLink>
        <HeaderLink href="/client-component/sensitive" isActive={pathnname?.startsWith('/client-component/sensitive')}>Client Componenet - sensitive</HeaderLink>
        <HeaderLink href="/server-component/posts" isActive={pathnname?.startsWith('/server-component/posts')}>Server Componenet - posts</HeaderLink>
        <HeaderLink href="/server-component/sensitive" isActive={pathnname?.startsWith('/server-component/sensitive')}>Server Componenet - sensitive</HeaderLink>
      </nav>
    </header>
  );
};

const HeaderLink = ({ href, children, isActive }: { href: string; isActive?: boolean, children: React.ReactNode; }) => {
  return (
    <Link
      href={href}
      className={`underline ${isActive ? 'text-blue-500' : ''}`}
    >
      {children}
    </Link>
  );
};