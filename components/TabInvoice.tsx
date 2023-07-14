'use client'
import React from 'react'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { typeInvoicesData } from '@/app/dashboard/bills/page';



 
  export type PropsTabInvoice={
    dataInvoice:typeInvoicesData[] | undefined
  }

  const columns: ColumnsType<typeInvoicesData> = [
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, { tags }) => (
        <>
        
          { 
          tags.map((tag) => {

           
            
            let color ;
            function getStatusColor(tagColor:string){
              return{Annulée:'volcano',
               Enretard: 'violet',
               Encaissé:'green',
               Enregistrer:'blue'
              }[tagColor]
            
            }
            color=getStatusColor(tag)
          

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },    
    {
      title: 'Émission',
      dataIndex: 'dateEmission',
      key: 'dateEmission',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Échéance',
      dataIndex: 'dateEcheance',
      key: 'dateEcheance',
    },
    {
      title: 'Client',
      dataIndex: 'clientName',
      key: 'clientName',
    },
    {
      title: 'Montant',
      key: 'amount',
      render: (_, record) => (
        <Space size="middle">
          <p> {record.amountTotal} €</p> 
        </Space>
      ),
    },
  ];

 
  const TabBills = ({dataInvoice}:PropsTabInvoice) => <Table columns={columns} dataSource={dataInvoice} />;

  export default TabBills;