'use client'
import { SessionProvider as Provider} from "next-auth/react"
import {Session} from 'next-auth'

type SessionProvider={
 children:React.ReactNode;
 session: Session | null

}

export const SessionProvider = ({ children,session}:SessionProvider) => {
  return (
   <Provider session={session}>
     {children}
   </Provider>
  )
}
