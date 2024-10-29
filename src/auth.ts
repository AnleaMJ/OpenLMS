import NextAuth from "next-auth";

import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
/*
We need AUTH_SECRET generated by `npx auth` command in .env.local file

GOOGLE_CLIENT_ID , GOOGLE_CLIENT_SECRET for authentication with google
and
FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET for authentication with facebook

*/
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
  ],
  pages:{
    signIn:"/signin"
  }
});


