'use client'
import React from 'react'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

export type DataClientType ={
    key?: string;
    nameClient?: string | undefined,
    email?: string;
    numberBills?:string,
    amount?:string|number,
    siren?:string,
    vtaNumber?:string,
    telNumber?:string,
    addressClient?:string,
    note?:string,
    typeClient?:string
    numberIBAN?:string,
    numberBIC?:string,
    nameBank?:string

   
  }

   type PropsClientTab={
    dataClient?: DataClientType[] | undefined
  }


  const columns: ColumnsType<DataClientType> = [
   
    {
      title: 'Nom',
      dataIndex: 'nameClient',
      key: 'nameClient',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'nombre de Facture',
      dataIndex: 'numberBills',
      key: 'numberBills',
    },
    
    {
      title: 'N° facture',
      dataIndex: 'numberBills',
      key: 'numberBills',
    },
    {
      title: 'Montant',
      key: 'amount',
      render: (_, record) => (
        <Space size="middle">
          <p> {record.amount} €</p> 
        </Space>
      ),
    },
  ];

  const data: DataClientType[] = [
    {
      key: '1',
      nameClient: 'Mr Francois',
      email:'test@gmail.com',
      numberBills:'FA2334C',
      amount:2333,
      addressClient:'string',
      note:'string',
      typeClient:'company',
      numberIBAN:'FR 1881818199101001010101',
      numberBIC:'BREDFR****',
      nameBank:'La banque populaire'
    },
    {
      key: '2',
      nameClient: 'Mr Durmaz',
      email:'test@gmail.com',
      numberBills:'FA2334C',
      amount:2333,
      addressClient:'string',
      note:'string',
      typeClient:'company',
      numberIBAN:'FR 1881818199101001010101',
      numberBIC:'BREDFR****',
      nameBank:'La banque populaire'
    },
    {
      key: '3',
      nameClient: 'Mr Dupont',
      email:'test@gmail.com',
      numberBills:'FA2334C', 
      amount:2333,
      addressClient:'string',
      note:'string',
      typeClient:'company',
      numberIBAN:'FR 1881818199101001010101',
      numberBIC:'BREDFR****',
      nameBank:'La banque populaire'
    },
  ];
  const TabClients = ({dataClient}:PropsClientTab) => <Table columns={columns} dataSource={dataClient} />;

  export default TabClients;
