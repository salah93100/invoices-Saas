  'use client'
  import { useSession ,signOut} from "next-auth/react";
  
  export default function Image() {
    const session = useSession();
    
    {console.log(session)}
      return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div>Bienvenu {session?.data?.user?.name} comment allez vous?</div>
          <button onClick={()=>signOut()}>LogOUT</button>
        </main>
      )
    }