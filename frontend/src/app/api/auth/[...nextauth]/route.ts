import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

// NextAuth v5 (Auth.js) configuration sfasfjjhh
const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                try {
                    // Call Backend API to verify credentials
                    const res = await fetch("http://localhost:5000/api/auth/login", {
                        method: "POST",
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" },
                    });

                    const data = await res.json();

                    // If login successful, return user data
                    if (res.ok && data) {
                        return {
                            id: data.id,
                            name: data.name,
                            email: data.email,
                            role: data.role
                        };
                    }
                    return null;
                } catch (e) {
                    console.error("Auth error", e);
                    return null;
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET || "supersecretkey", // Fallback secret
    pages: {
        signIn: '/auth/login', // Custom login page
    },
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            if (user) {
                token.role = (user as any).role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as any).role = token.role;
            }
            return session;
        }
    }
});

export const { GET, POST } = handlers;
export { auth, signIn, signOut };
