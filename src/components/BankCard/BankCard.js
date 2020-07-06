import React from 'react'
import './BankCard.css'

const BankCard = ({card_number, card_name,card_expire,card_security})=>{
    console.log(card_name);
    
    return (
        <section className="card__container">
            <span>{card_name.toUpperCase()}</span>
        </section>
    )
}

export default BankCard