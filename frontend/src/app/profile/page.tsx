import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { AuthButton } from '@/components/auth-button';

export default async function ProfilePage() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect('/auth/login');
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black px-4">
      <div className="w-full max-w-2xl space-y-8 rounded-lg bg-white dark:bg-zinc-900 p-8 shadow-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
            Profile
          </h1>
          <AuthButton />
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Name
            </label>
            <p className="mt-1 text-lg text-black dark:text-zinc-50">
              {user.name || 'Not provided'}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email
            </label>
            <p className="mt-1 text-lg text-black dark:text-zinc-50">
              {user.email || 'Not provided'}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Role
            </label>
            <p className="mt-1 text-lg text-black dark:text-zinc-50">
              {(user as any).role || 'user'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
