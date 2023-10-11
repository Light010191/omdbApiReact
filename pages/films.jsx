import { useState } from 'react';
import Films from '../components/Films';
import omdb from '../components/gen-json-table/omdb';
import Error from 'next/error';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function TablePage() {
  const          
    config = omdb;
  if (config)
    return <>     
    <Films config={config} /></>  
      
  return <Error statusCode={'wrong way'} />;
}