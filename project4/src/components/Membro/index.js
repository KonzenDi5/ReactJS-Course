import React, { Component } from "react";

class Membro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: props.nome,
    };
    this.entrar = this.entrar.bind(this);
  }
  entrar() {
    this.setState({ nome: "Lucas" });
  }

  render() {
    return (
      <div>
       <h2>Bem-vindo(a) {this.state.nome}</h2>
        
        <button onClick={this.entrar}>Entrar como Lucas</button>
        <button onClick={()=> this.setState({nome: 'Visitante'})}>Sair</button>
      </div>
    );
  }
}

export default Membro;
