import React from 'react'

const Pessoa = ({nome, idade}) => {
    return (
        <div className="app-pessoa">
            <h1>{nome}</h1>
            <h2>{idade}</h2>
        </div>
    )
}

export default Pessoa