import './globals.css'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { SessionProvider } from './SessionProvider';
import { Login } from './Login';
import DashboardLayout from './dashboard/layout';
import Home from './page';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Facturation SaaS',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
const session  =await getServerSession(authOptions)

  return (
    <html lang="en">
     
  <SessionProvider session={session}>
  <body className={inter.className}>

     {!session?(
      <Login/>
   
     ):( 
       children
     )}
         </body>
  </SessionProvider>
        
    
    </html>
  )
}
