"use client";
import { HeadBarPage } from "@/components/HeadBarPage";
import { useState } from "react";
import { DataClientType } from "@/components/TabClients";
import { IoAddOutline } from "react-icons/io5";
import { IoDownloadOutline } from "react-icons/io5";
import { InputText } from "@/components/InputText";
import { collection, addDoc } from "firebase/firestore"; 
import {db} from "../../../firebase/config"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function AddClient(){
  const session= useSession()
  const sessionId=session?.data?.user?.id
  const router = useRouter()

    const [clientData,setClientData]=useState<DataClientType>({
        typeClient:'s',
        key:'Fa',
        nameClient: 's',
        email:'exemple@mail.com',
        numberBills:'12',
        amount:'0',
        siren:'123 456 789',
        vtaNumber:'FR 0167899000',
        addressClient:'51 rue de Paris',
        note:'c',
        numberIBAN:'FR 1881818199101001010101',
        numberBIC:'BREDFR****',
        nameBank:'La banque populaire'
    })  

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name   } = e.target;
        
    
        setClientData({...clientData, [name]:value });
        {console.log(clientData)}
      };
      const handleSumbmitClient =async (e:React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        {console.log(clientData.email)}
        try {
            const docRef = await addDoc(collection(db, "client"), {...clientData,
            user:sessionId});
            console.log("Document written with ID: ", docRef.id);
            router.push('/dashboard/clients')
          } catch (e) {
            console.error("Error adding document: ", e);
          }
       
          


      };
    return (
    <main className="flex min-h-screen flex-col">
        <HeadBarPage tittle="Client" buttonPrimary={{buttonText:"Enregistrer Client",buttonTheme:"Primary",Icon:IoAddOutline,onClick:handleSumbmitClient}} buttonSecondary={{buttonText:"Annuler",buttonTheme:"Secondary",Icon:IoDownloadOutline,onClick:()=>setClientData({})}} href={''} />
       <div className="flex flex-row w-full h-screen gap-4 justify-center p-2">
         <div className="flex flex-col border  p-4 space-y-4">
          <p className="text-3xl">Coordonnées client</p>
          <div className="flex flex-col">
    
        <div className="flex flex-row gap-2">
        <label>
          <input type="radio" name="typeClient" value="comapny"  onChange={handleChange}/>
          Une entreprise
        </label>
        <label>
          <input
            type="radio"
            name="typeClient"
            value="individual"
            defaultChecked={true} 
            onChange={handleChange}
          />
          Particulier
        </label>
        </div>
      </div>
      <div className=" w-full">
      <InputText 
    name={'nameClient'} 
    handleChange={handleChange}
    value={clientData?.nameClient}
    placeHolder={'Nom ou raison'}
    label={'Raison sociale'}
    />
    </div>
      <div className="flex flex-rox gap-2">
     
     <div className="flex flex-col ">
     <InputText 
    name={'siren'} 
    handleChange={handleChange}
    value={clientData?.siren}
    placeHolder={'Numéro de Sireb'}
    label={'Siren'}
    />
    <InputText 
    name={'nameClient'} 
    handleChange={handleChange}
    value={clientData?.nameClient}
    placeHolder={'déstinataire'}
    label={'Destinataire'}
    />
     </div>
     <div className="flex flex-col">
     <InputText 
    name={'vtaNumber'} 
    handleChange={handleChange}
    value={clientData?.vtaNumber}
    placeHolder={'numéro de TVA...'}
    label={'Numéro de TVA'}
    />
    <InputText 
    name={'telNumber'} 
    handleChange={handleChange}
    value={clientData?.telNumber}
    placeHolder={'ex: +33 6 51 ...'}
    label={'Téléphone'}
    />
     </div>
      </div>
     <div>
     <InputText 
    name={'addressClient'} 
    handleChange={handleChange}
    value={clientData?.addressClient}
    placeHolder={'Adresse du client'}
    label={'Adresse'}
    />
     </div>
     <div>
     <InputText 
    name={'email'} 
    handleChange={handleChange}
    value={clientData?.email}
    placeHolder={'ex: test@gmail.com..'}
    label={'Email'}
    />
     </div>
     <div>
     <InputText 
    name={'note'} 
    handleChange={handleChange}
    value={clientData?.note}
    placeHolder={'Note importante sur le client...'}
    label={'Remarques'}
    />



     </div>
         </div>
         <div className="flex flex-col border p-4 gap-2 space-y-4">
         <p className="text-3xl">Informations bancaires</p>
         <div>
     <InputText 
    name={'numberIBAN'} 
    handleChange={handleChange}
    value={clientData?.numberIBAN}
    placeHolder={'Iban...'}
    label={'IBAN sur lequel je souhaite être payé'}
    />



     </div>
     <div>
     <InputText 
    name={'numberBIC'} 
    handleChange={handleChange}
    value={clientData?.numberBIC}
    placeHolder={'BIC...'}
    label={'BIC sur lequel je souhaite être payé'}
    />



     </div>
     <div>
     <InputText 
    name={'nameBank'} 
    handleChange={handleChange}
    value={clientData?.nameBank}
    placeHolder={'Nom de la banque'}
    label={'Nom de la banque sur laquelle je souhaite être payé'}
    />



     </div>
         </div>
       </div>
    </main>

  )
}
