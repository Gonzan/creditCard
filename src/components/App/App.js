import React, { useState } from 'react';

import './App.css';
import BankCard from '../BankCard/BankCard'
import CardForm from '../CardForm/CardForm'


function App() {
 const [data,setdata] = useState({
  
      card_number:'',
      card_name:'',
      card_expire:'',
      card_security:''
    
  })
 const handleChange = (e)=>{
   setdata({
     [e.target.name]:e.target.value
   })
 }
  console.log(data)
  return (
    <section className="hero">
      <BankCard {...data}/>
      <CardForm onChange={handleChange}/>
    </section>
  );
}

export default App;
