import React from "react";

export default props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input
                id='passoInput'
                type='number'
                value={props.passo}
                onChange={e => props.setPasso(+e.target.value)} /* O + antes do evento, converte o mesmo em valor numerico */
            />
        </div>
    )
}