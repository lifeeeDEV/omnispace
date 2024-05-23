import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import bcrypt from 'bcrypt';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        await dbConnect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user && await bcrypt.compare(credentials.password, user.password)) {
            return { id: user._id.toString(), email: user.email };  // Ensure id is a string
          } else {
            return null;
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;  // Set user id in the token
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;  // Access user id from the token
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,  // Ensure this line is present
  session: {
    jwt: true,
  },
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login', // Redirect to login page in case of error
  },
});
