import React from 'react'
import Pessoa from './Pessoa';
import Cadastro from './Cadastro';


class App extends React.Component{
    state = {
        nome: '',
        listaPessoas: [
            {nome: 'agesiel', idade: 35},
            {nome: 'ateste', idade: 52}
        ]
    }

    onInputChange = (event) => {
        this.setState({nome: event.target.value})
    }

    onSave = () => {
        const novaLista = [...this.state.listaPessoas, {nome: this.state.nome, idade: 32}]
        this.setState({listaPessoas: novaLista})
    }

    render() {
        console.log(this.state.nome)
        return (
            <div>
                <Cadastro onChangeName={this.onInputChange} onSave={this.onSave} />
                {this.state.listaPessoas.map(pessoa => <Pessoa nome={pessoa.nome + ' souza'} idade={this.state.listaPessoas.length}/> )}
            </div>
        )
    }
}


export default App