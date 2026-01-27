import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize() {
        return {
          id: "1",
          name: "Test User",
          email: "test@test.com",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

// 🔴 ITO ANG MADALAS NA KULANG
export { handler as GET, handler as POST };
