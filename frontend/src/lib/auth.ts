// Re-export auth functions from the NextAuth v5 route handler
export { auth, signIn, signOut } from '@/app/api/auth/[...nextauth]/route';
