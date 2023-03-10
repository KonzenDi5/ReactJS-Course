import React, {Component} from 'react';

class Equipe extends Component{
  render(){
    return(
      <div>
      <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
      <hr/>
      </div>
    )
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
      <h2>Olá me chamo {this.props.nome}</h2>
      <h3>Cargo: {this.props.cargo}</h3>
      <h3>Idade: {this.props.idade}</h3>
    </div>
    )
  }
}
function App(){
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Lucas" cargo="Desenvolvedor Front-End" idade="24"/>
      <Equipe nome="Matheus" cargo="Desenvolvedor Java Sênior" idade="32"/>
      <Equipe nome="Amanda" cargo="UI/UX Designer" idade="26"/>
    </div>
  )
}
export default App;