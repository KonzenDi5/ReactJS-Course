import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
    this.entrar = this.entrar.bind(this)
    this.sair = this. sair.bind(this)
  }
  entrar(){
    this.setState({status: true})
  }
  sair(){
    this.setState({status: false})
  }

  render() {
    return (
      <div>
        {this.state.status ? (
          <div>
            <h2>Bem-Vindo ao Sistema</h2>
            <button onClick={this.sair}>Sair</button>
          </div>
        ) : (
          <div>
            <h2>Olá Visitante, faça o login!</h2>
            <button onClick={this.entrar}>Entrar no sistema</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
