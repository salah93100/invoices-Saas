import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId:'202491855529-kvcmmhs76rj4ohfe3nmbm2cnsnrllp02.apps.googleusercontent.com',
            clientSecret: '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'
          })
        // ...add more providers here
      ],

      adapter: FirestoreAdapter({
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
        }),
      }),
      callbacks: {
        session({ session, user }) {
            if (session.user) {
              session.user.id = user.id;
            }
            return session;
          },
    },
          
         
        
      
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }