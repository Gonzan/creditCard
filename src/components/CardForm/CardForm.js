import React from 'react'
import './CardForm.css'
// import {Mercadopago} from 'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js'
    const CardForm = (props)=>{
        
        return(
            <div className="form__container">
                <section className="form">
                    <label>Nombre:</label>
                    <input type="text" name="card_name" onChange={props.onChange}/>
                    <label>Numero:</label>
                    <input type="number" name="card_number" onChange={props.onChange}/>
                    <div className="form__control">
                        <label>Expira:</label>
                        <input type="text" name="card_expire" onChange={props.onChange}/>
                        <label>Clave</label>
                        <input type="text" name="card_security" onChange={props.onChange}/>
                    </div>
                 </section>
            </div>

        )
    }

export default CardForm