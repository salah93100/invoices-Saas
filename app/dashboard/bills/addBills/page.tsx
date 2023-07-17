"use client";
import { HeadBarPage } from "@/components/HeadBarPage";
import ImageInvoices from "../../../../public/lawyerlogo.png";
import InvoicesTab from "@/components/InvoicesTabData";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import { Page, Text, View, Document, StyleSheet ,Image ,Canvas} from '@react-pdf/renderer';
import { PDFViewer ,PDFDownloadLink} from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { CustomInvoicesPdf } from "@/components/CustomInvoicesPdf";
import { useState } from "react";
import { PropsCustomInvoice } from "@/components/CustomInvoicesPdf";
import { CalculeTotalVTA } from "@/components/CalculeTotal";
import { CalculeTotal } from "@/components/CalculeTotal";
import { IoAddOutline } from "react-icons/io5";
import { AiOutlineUpload } from "react-icons/ai";
import { addDoc,collection, query } from "firebase/firestore";
import { db } from '../../../firebase/config';
import { typeInvoicesData } from "../page";
import {useSession,signOut} from 'next-auth/react'
import { useRouter } from "next/navigation";
import { useCollection } from "react-firebase-hooks/firestore";


const DocumentInvoices = ({handleChange,invoiceData}:PropsCustomInvoice) => {

   
  return (
    <Document>
    <Page size="A4" style={{  fontSize: '14px' ,textDecorationColor:'#e5e7eb'}}>
     <View style={{  flexDirection: 'row',justifyContent:'space-between' ,marginTop:15}}>
     <View style={{ textAlign: 'left', margin: 20 }}>
     <Image
     src='/lawyerlogo.png'
     style={{  width: '100px' }}
      />
    <Text>Facture N° F-202306-9842</Text>
    <Text style={{  position: 'absolute', top:120}}>Date écheance</Text>
    <Text style={{  position: 'absolute', top:135}}>20/04/2000</Text>
    <Text style={{  position: 'absolute',left:100,top:120}}>Date émission</Text>
    <Text style={{  position: 'absolute',left:100,top:135}}>20/04/2023</Text>
    </View>
   
    
    <View style={{ textAlign: 'right', margin: 20 }}>
    <Text>Émetteur</Text>
    <Text>Cabinet EMMANUEL TRINK</Text>
    <Text>83 Avenue Foch 75016 Paris - France</Text>
    <Text>Cabinet@digityourdream.fr</Text>
    <Text>Clients: (valeur clien)</Text>

  



     </View>
  
     </View>
     <View
  style={{
    borderBottomColor: 'rgb(148 163 184)',
    borderBottomWidth: 1,
    marginTop: 35,
    marginLeft: 10,
    marginRight:10
  }}
/>
<View style={{margin:20}}>
<View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
<View style={{}}>
<View style={{flexDirection:'column'}}>
<Text>Affaire : </Text>
  <Text>{invoiceData?.clientName}</Text>
</View>
</View>
<View style={{flexDirection:'row',justifyContent:'space-around'}}>

<View style={{flexDirection:'column',marginHorizontal:10}}>
<Text>Prix Unit. HT</Text>
  <Text>300,00 €</Text>
</View>
<View style={{flexDirection:'column',marginHorizontal:10}}>
<Text>Taux TVA</Text>
  <Text>21%</Text>
</View>
<View style={{flexDirection:'column',marginHorizontal:10}}>
<Text>Total HT</Text>
  <Text>{Number(invoiceData?.excludingTotal)}€</Text>
</View>
</View>
</View>
</View>
<View
  style={{
    borderBottomColor: 'rgb(148 163 184)',
    borderBottomWidth: 1,
    marginTop: 5,
    marginLeft: 10,
    marginRight:10
  }}
/>
<View  style={{position: 'absolute',left:340,top:300}}>
<View  style={{flexDirection: 'column' ,textAlign: 'left' }}>
  <Text style={{ fontSize: '24px'}}>Recap</Text>
  <View style={{flexDirection:'row', marginTop: 5 }}>
  <Text style={{flexDirection: 'column' }} >Total Ht: </Text>
  <Text style={{marginLeft: '100px' }}>{Number(invoiceData?.excludingTotal)} €</Text>
  </View>
  <View
  style={{
    borderBottomColor: 'rgb(148 163 184)',
    borderBottomWidth: 1,
    marginVertical: 10,
  }}
/>
<View style={{flexDirection:'row', marginTop: 5 }}>
  <Text style={{flexDirection: 'column' }} >Total Tva: </Text>
  <Text style={{marginLeft: '100px' }}>{CalculeTotal(Number(invoiceData?.vatRate),Number(invoiceData?.excludingTotal))} €</Text>
  </View>

  <View
  style={{
    borderBottomColor: 'rgb(148 163 184)',
    borderBottomWidth: 1,
    marginVertical: 10,
 
  }}
/>
   <View style={{flexDirection:'row', marginTop: 5 }}>
  <Text style={{flexDirection: 'column' }} >Total TTC: </Text>
  <Text style={{marginLeft: '100px' }}>{CalculeTotal(Number(invoiceData?.vatRate),Number(invoiceData?.excludingTotal))}€</Text>
  </View>
</View>
</View>
<View  style={{flexDirection: 'row',margin:20}}>

<View  style={{flexDirection: 'column',left:5,top:170,backgroundColor:'rgba(241, 242, 245, 1)',padding:16}}>
  <Text style={{marginHorizontal: 4}}>Informations de paiement :</Text>
  <Text style={{marginHorizontal: 4}}>Banque: Sociéter géneral</Text>
  <Text style={{marginHorizontal: 4}}>IBAN : FR76 1695 8000 0129 1283 1370 970</Text>
  <Text style={{marginHorizontal: 4}}>BIC : QNTOFRP1XXX</Text>
</View>
</View>
<View  style={{position: 'absolute',left:10,bottom:10}}>
  <Text style={{fontSize:'10px'}}>Document générer par InvoicesSaaS</Text>
</View>
    </Page>
    </Document>
  )
}



export default function addInvoices() {
  const session= useSession()
  const sessionId=session?.data?.user?.id
  console.log(session)
  const router = useRouter()
  const [invoiceModal,setInvoiceModal]=useState<boolean>(false)
  const [invoiceData,setInvoiceData]=useState<typeInvoicesData>({
    key:'Fa',
    excludingPrice: '0',
    idInvoices:'00',
    excludingTotal:'0',
    vatRate:'0',
    tags:['Enregistrer']
})
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name   } = e.target;
    

    setInvoiceData({...invoiceData, [name]:value });
  };
  const handleSumbmitInvoice =async (e:React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
   
    try {
        const docRef = await addDoc(collection(db, "invoice"),{...invoiceData,
        user:sessionId});
        console.log("Document written with ID: ", docRef.id);
        router.push('/dashboard/bills')
      } catch (e) {
        console.error("Error adding document: ", e);
      }
   
      


  };
  return (
    <main className="flex min-h-screen flex-col ">
              <HeadBarPage tittle="Facture" buttonPrimary={{buttonText:"Enresgistrer",buttonTheme:"Primary",Icon:IoAddOutline,onClick:handleSumbmitInvoice}} buttonSecondary={{buttonText:"Aperçu",buttonTheme:"Secondary",Icon:IoAddOutline,onClick:()=>setInvoiceModal(true)}} href={''}/>
<div className="flex flex-row">
         <CustomInvoicesPdf  handleChange={handleChange} invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
       <div className="flex-col flex mt-4">
  <PDFDownloadLink document={<DocumentInvoices handleChange={handleChange} invoiceData={invoiceData} setInvoiceData={setInvoiceData}/>}  fileName={`${invoiceData.idInvoices}.pdf`}>
  {({ blob, url, loading, error }) =>
                    loading ? "Report loading..." : <ButtonWithIcon buttonText={'Telecharger'} Icon={IoAddOutline} buttonTheme={'Primary'} />

                }
  </PDFDownloadLink>
  </div> 
  </div>
  {invoiceModal?( <div className="fixed h-screen bg-black bg-opacity-25 w-full top-0  left-0 right-0 backdrop-blur-sm flex justify-center items-center" onClick={()=>setInvoiceModal(false)}>
        <PDFViewer width={"600px"} height="90%">
        
        <DocumentInvoices handleChange={handleChange} invoiceData={invoiceData} setInvoiceData={setInvoiceData}/>
   
  </PDFViewer>
  </div>):""}
 
    </main>
  );
}
