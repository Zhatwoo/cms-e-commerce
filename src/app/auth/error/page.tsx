import Link from 'next/link';

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black px-4">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white dark:bg-zinc-900 p-8 shadow-lg text-center">
        <h2 className="text-3xl font-bold text-black dark:text-zinc-50">
          Authentication Error
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          An error occurred during authentication. Please try again.
        </p>
        <Link
          href="/auth/login"
          className="inline-block rounded-md bg-zinc-950 dark:bg-zinc-50 px-4 py-2 text-sm font-medium text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}
