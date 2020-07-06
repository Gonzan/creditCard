import React from 'react'

    const CardForm = (props)=>{
        return(
            <div className="form__container">
                <section className="form">
                    <label>Nombre:</label>
                    <input type="text" name="card_name" onChange={props.onChange }/>
                 </section>
            </div>

        )
    }

export default CardForm