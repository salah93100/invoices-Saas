'use client'
import TabBills from "@/components/TabInvoice"
import { HeadBarPage } from "@/components/HeadBarPage"
import { IoAddOutline } from "react-icons/io5";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection,query,where } from "firebase/firestore";
import { db } from '../../firebase/config';
import { useSession } from "next-auth/react";

export type typeInvoicesData={
  key: string;
  idInvoices:string,
  clientName?:string;
  case?: string;
  excludingPrice: number;
  vatRate: number;
  excludingTotal: number;
  tags? : string[];
  dateEmission?: string;
  dateEcheance?: string;
  amountTotal:number
  vatTotal:number

}

export default function BillsPage() {

  const session =useSession()
  const [invoice, loading, error] = useCollection(query(collection(db,'invoice'),where("user","==",`${session?.data?.user?.id}`)));
  const arrayOfDocs = invoice?.docs.map((doc) => doc.data());


 return (
      <main className="flex min-h-screen flex-col ">
   
        <HeadBarPage 
        tittle="Facture" 
        buttonPrimary={{buttonText:"Ajouter",buttonTheme:"rrr",Icon:IoAddOutline}} 
        buttonSecondary={{buttonText:"importer facture",buttonTheme:"rrr",Icon:IoAddOutline}}
        href={'/dashboard/bills/addBills'}
        />
       {invoice?(<TabBills dataInvoice={arrayOfDocs}/>):(
        <p>Oups! vous n'avez pas de facture</p>
       )}
       
     
      
      </main>
    )
  }