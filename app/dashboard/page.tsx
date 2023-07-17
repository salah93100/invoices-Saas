  'use client'
  import { useSession ,signOut} from "next-auth/react";
  
  export default function Image() {
    const session = useSession();
    
    {console.log(session)}
      return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div><p className="text-3xl">Bienvenu {session?.data?.user?.name} comment allez vous?</p>
          <button onClick={()=>signOut()} className={"text-white flex flex-row items-center gap-2 border px-5 py-3 rounded w-fit bg-red-500  hover:bg-white hover:text-blue-500 hover:border-blue-500"}>LogOUT</button>
</div>
        </main>
      )
    }