import React from 'react'

const Cadastro = (props) => {
    return (
        <div>
            <input onChange={event => props.onChangeName(event)}/>
            <button onClick={props.onSave}>Cadastrar</button>
        </div>
    )
}

export default Cadastro