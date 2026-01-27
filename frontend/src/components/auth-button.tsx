'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export function AuthButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="text-sm text-zinc-600 dark:text-zinc-400">Loading...</div>
    );
  }

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-zinc-700 dark:text-zinc-300">
          Welcome, {session.user?.name || session.user?.email}
        </span>
        {session.user?.role && (
          <span className="text-xs px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200">
            {session.user.role}
          </span>
        )}
        <button
          onClick={() => signOut()}
          className="text-sm px-4 py-2 rounded-md bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Link
        href="/auth/login"
        className="text-sm px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800"
      >
        Sign In
      </Link>
      <Link
        href="/auth/register"
        className="text-sm px-4 py-2 rounded-md bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200"
      >
        Sign Up
      </Link>
    </div>
  );
}
