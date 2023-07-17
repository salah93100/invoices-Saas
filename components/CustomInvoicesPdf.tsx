'use client'
import InvoicesTabPdf from "./InvoicesTabData";
import { ButtonWithIcon } from "./ButtonWithIcon";
import { IoAddOutline } from "react-icons/io5";
import { InputSelect } from "./InputSelect";
import { Dispatch, SetStateAction } from "react";
import { typeInvoicesData } from "@/app/dashboard/bills/page";
import { CalculeTotal } from "./CalculeTotal";
import { CalculeTotalVTA } from "./CalculeTotal";
import { useEffect } from "react";
import { InputText } from "./InputText";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";
import { db } from "@/app/firebase/config";

export type PropsCustomInvoice = {
    handleChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
    invoiceData:typeInvoicesData,
    setInvoiceData:(value :typeInvoicesData)=>void
  }
  


export const CustomInvoicesPdf = ({handleChange,invoiceData,setInvoiceData}:PropsCustomInvoice) => {
  const totalVta=CalculeTotalVTA(Number(invoiceData?.vatRate),Number(invoiceData?.excludingTotal))
  const totalTTC=CalculeTotal(Number(invoiceData?.vatRate),Number(invoiceData?.excludingTotal))
  const [client, loading, error] = useCollection(query(collection(db,'client')));
  const clientDataArray = client?.docs.map((doc) => doc.data());
  const clientName= clientDataArray? clientDataArray.map((client) =>({label:client.nameClient,value:client.nameClient} )) :undefined
  console.log(clientName)
useEffect(() => {
 
   
    setInvoiceData({...invoiceData, amountTotal:totalTTC.toString(),vatTotal:totalVta.toString()})
  
 
  return () => {
    setInvoiceData({...invoiceData, amountTotal:'0',vatTotal:'0'})
  } 
}, [totalVta,totalTTC])

    return (
     
     
      <div className="shadow-xl max-w-3xl p-4 m-4 min-h-screen">
        <div className="flex flex-row justify-between">
            
          <div className="flex flex-col gap-2 ">
            <div>
              
               <picture>
               <img
              src={'/lawyerlogo.png'}
              width={100}
              height={100}
              alt="Picture of the author"
            /> 
               </picture>
            
  
            
            </div>
            <div>
              <div className="flex flex-row gap-1">
              <p className="font-semibold">Facture N° N°202331258
                  <input
                    type="text"
                    id="idInvoices"
                    name="idInvoices"
                    onChange={handleChange}
                    value= {invoiceData.idInvoices}
                    className="w-[30px] mx-1 border rounded px-1"
                    placeholder="ID"
                  />
               </p>
               </div>
              <div className="flex flex-row gap-2">
                <div className="idInputdatestart flex flex-col">
                  <label>Date écheance</label>
                  <input
                    type="date"
                    id="start"
                    name="dateEcheance"
                    onChange={handleChange}
                    value={invoiceData.dateEcheance}
                  />
                </div>
                <div className="idInputdatestart flex flex-col">
                  <label>Date émission</label>
                  <input
                    onChange={handleChange}
                    type="date"
                    id="start"
                    name="dateEmission" 
                    value={invoiceData.dateEmission}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p>Émetteur</p>
              <p>Cabinet EMMANUEL TRINK</p>
              <p>83 Avenue Foch 75016 Paris - France</p>
              <p>Cabinet@digityourdream.fr</p>
            </div>
            <div>
            <InputSelect 
            options={clientName}
            label="Clients :"
            name="clientName"
            value={invoiceData?.clientName as string}
            onChangeSelect={handleChange}

            />
              
            </div>
          </div>
        </div>
        <hr className="my-4 bg-secondary-600 " />
        <div className="flex flex-col">
        <InvoicesTabPdf handleChange={handleChange} invoiceData={invoiceData} setInvoiceData={setInvoiceData}/>
    <div className="flex justify-end my-2">
      
        <ButtonWithIcon
          buttonText="Ajouter Servvices"
          buttonTheme="Primary"
          Icon={IoAddOutline}
        />
        
        </div>
        </div>
        <hr className="my-2 bg-secondary-600 " />
        <div className="flex flex-row justify-between my-6">
          <div><p className="text-3xl">Détails</p>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col">
              <p>Taux</p> 
              <p>{invoiceData?.vatRate}</p>
            </div>
            <div>
              <p>Montant TVA</p>
              <p>0,00€%</p>
            </div>
            <div><p>Base HT</p>
            <p>0,00€%</p>
            </div>
          </div>
          </div>
          <div className="flex flex-col min-w-[315px]">
           <p className="text-3xl">Récapitulatifs</p>
           <table className="table-fixed">
            <tbody>
           
            <tr>
              <td colSpan={2}>
            <hr className="my-4 bg-secondary-600 w-full" />
            </td>
            </tr>
  
            <tr>
              <td>
                <div>
                Total HT
                </div>
              </td>
              <td>
                <div>
               {invoiceData?.excludingTotal} €
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                Total TVA
                </div>
              </td>
              <td>
                <div>
                  {invoiceData.vatTotal}
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
            <hr className="my-4 bg-secondary-600 w-full" />
            </td>
            </tr>
            <tr>
              <td>
                <div>
                Total TTC
                </div>
              </td>
              <td>
                <div>
                {invoiceData?.amountTotal}            
                    </div>
              </td>
            </tr>
            </tbody>
           </table>
  
            </div>
        </div>
        <div className="">
       <div className="bg-slate-200 inline-block	p-4 my-4">
      <p> Informations de paiement :</p>
      <p> Banque: Sociéter géneral</p>
      <p>IBAN : FR89 1695 8000 9999 1278 1370 078</p>
      <p>BIC : QNTOFRP1XXX </p>
       </div>
       </div>
      </div>
      
   
    )
  }
  