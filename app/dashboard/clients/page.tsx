'use client'
import { HeadBarPage } from "@/components/HeadBarPage";
import TabClients from "@/components/TabClients";
import { IoAddOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { collection,query,where} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from '../../firebase/config';
import { useEffect, useState } from "react";
import { DataClientType } from "@/components/TabClients";
export default function ClientPage() {

  const session =useSession()
  const [client, loading, error] = useCollection(query(collection(db,'client')));
  const clientDataArray= client?.docs.map((doc) => doc.data());
  const [clientData, setClientData] = useState<DataClientType[]>([])
  
  useEffect(() => {
    if (clientDataArray){
      setClientData(clientDataArray)

    }
  
    return () => {
      setClientData([])
    }
  }, [])
  

    return (
      <main className="flex min-h-screen flex-col">
        <HeadBarPage tittle="Facture" buttonPrimary={{buttonText:"Ajouter",buttonTheme:"rrr",Icon:IoAddOutline}} buttonSecondary={{buttonText:"importer facture",buttonTheme:"rrr",Icon:IoAddOutline}} href={'/dashboard/clients/addClient'}/>
          <TabClients dataClient={clientData}/>   
       </main>
    )
  }
  