import React, {Component} from "react";

class App extends Component{

  constructor(props){
    super(props)
    this.state={
      nome: '',
      email: '',
      senha: '',
      error: ''
    }
    this.cadastrar = this.cadastrar.bind(this)
  }
  cadastrar(e){
    const{nome, email, senha} = this.state
  
    if(nome !== '' && email !== '' && senha !== ''){
      alert(`Nome: ${nome} \nSenha: ${senha} \nEmail: ${email}`)
    }else{
        this.setState({error: 'Ops! Parece que está faltando algo.'})
      }

    e.preventDefault()
  }

  render(){
    return(
      <div>
        <h1>Novo Usuário</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <input type="text" value={this.state.nome} onChange={(e)=>this.setState({nome: e.target.value})} /> <br/>
          <input type="email" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} /><br/>
          <input type="password" value={this.state.senha} onChange={(e)=>this.setState({senha: e.target.value})} /> <br/>

          <button type="submut">Cadastrar</button>
          </form>
      </div>
    )
  }
}
export default App;