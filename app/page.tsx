'use client'
import Image from 'next/image'
import { Login } from './Login'
import {useSession,signOut} from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, query } from "firebase/firestore";
import { db } from './firebase/config';
import Link from 'next/link';

export default function Home() {
  const session = useSession();
  const [users, loading, error] = useCollection(query(collection(db,'users')));
  {console.log(users?.docs[0]?.data())}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
     <div>{session?.data?.user?.name}</div> 
     <div>{users?.docs[0]?.data().email}</div> 
    
      <Login/>
      <button onClick={()=>signOut()}>LogOUT</button>
      <Link href='/dashboard/bills/addBills'>
        dashboard
      </Link>
    Home page
    </main>
  )
}
