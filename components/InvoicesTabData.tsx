import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { InputSelect } from './InputSelect';
import { InputText } from './InputText';
import { PropsCustomInvoice } from './CustomInvoicesPdf';
interface DataType {
  key: string;
  case: string;
  excludingPrice: number;
  vatRate: string;
  excludingTotal: number;
}




const data: DataType[] = [
  {
    key: '1',
    case: 'excludingTotal',
    excludingPrice: 300,
    vatRate: 'New York No. 1 Lake Park',
    excludingTotal: 3000,
  }
];

const InvoicesTabData = ({handleChange,invoiceData}:PropsCustomInvoice) => 
{

const columns: ColumnsType<DataType> = [
  {
    title: 'Affaire',
    dataIndex: 'case',
    key: 'case',
    render: (text,record) => <InputSelect 
    options={[{value:'Mme sarfati',label:'Mme sarfati'},{value:'Dupont',label:'Mr Dupont'}]}
    name="clientName"
    value={invoiceData?.clientName}
    onChangeSelect={handleChange}

    />,
  },
  {
    title: 'Prix Unit. HT',
    dataIndex: 'excludingPrice',
    render: (text) => <InputText 
    name={'excludingPrice'} 
    handleChange={handleChange}
    value={invoiceData?.excludingPrice}
    placeHolder={text}
    />
    
    ,
  },
  {
    title: 'Taux TVA',
    dataIndex: 'vatRate',
    key: 'vatRate',
    render: (text) => <InputSelect 
    options={[{value:0.1,label:'10%'},{value:0.2,label:'20%'}]}
    name="vatRate"
    value={invoiceData?.vatRate}
    onChangeSelect={handleChange}

    />,
  },
  {
    title: 'Total. HT',
    key: 'excludingTotal',
    dataIndex: 'excludingTotal',
    render: (text) =><InputText 
    name={'excludingTotal'} 
    handleChange={handleChange}
    value={invoiceData?.excludingTotal}
    placeHolder={text}
    />,

  },
];
return(<Table 
  columns={columns} 
  dataSource={data} 
  pagination={false} 
  />)
}
export default InvoicesTabData;