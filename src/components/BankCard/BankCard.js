import React from 'react'
import './BankCard.css'

const BankCard = ({card_number, card_name,card_expire,card_security,flipped})=>{
    console.log(flipped);
    
    return (

        <section className="card__container">
            <div className={flipped ? "card__inner flipped" : "card__inner"}>
                <article className="card__front">
                    <span className="card card__name">{card_name.toUpperCase()}</span>
                    <span className="card card__number">{card_number}</span>
                    <span className="card card__expire">{card_expire}</span>
                </article>   
                <article className="card__back">
                    <span className="card card__security">{card_security}</span>
                </article>
            </div>
        </section>
    )

}

export default BankCard