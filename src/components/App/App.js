import React, { useState } from 'react';

import './App.css';
import BankCard from '../BankCard/BankCard'
import CardForm from '../CardForm/CardForm'


function App() {
 const [data,setdata] = useState({
      flipped:false,
      card_number:'',
      card_name:'',
      card_expire:'',
      card_security:''
    
  })
  const handleChange = (e)=>{
    console.log(e.target);
    if (e.target.name === "card_expire" && e.target.value.length === 2) {e.target.value = e.target.value.concat("/")};    
    const dataFlipped = (e.target.name === "card_security") ? true : false;  
    data.flipped = dataFlipped;
  
    setdata({
     ...data,
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
