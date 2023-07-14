'use client'
import { HeadBarPage } from "@/components/HeadBarPage";
import TabClients from "@/components/TabClients";
import { IoAddOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { collection,query,where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from '../../firebase/config';

export default function ClientPage() {

  const session =useSession()
  const [client, loading, error] = useCollection(query(collection(db,'client')));
  const clientDataArray = client?.docs.map((doc) => doc.data());
  console.log(clientDataArray)
    return (
      <main className="flex min-h-screen flex-col">
        <HeadBarPage tittle="Facture" buttonPrimary={{buttonText:"Ajouter",buttonTheme:"rrr",Icon:IoAddOutline}} buttonSecondary={{buttonText:"importer facture",buttonTheme:"rrr",Icon:IoAddOutline}} href={'/dashboard/clients/addClient'}/>
          <TabClients dataClient={clientDataArray}/>   
       </main>
    )
  }
  