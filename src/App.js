import React, { Component } from 'react'
import './App.css'
import Person from './components/Person'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={show:false}
    
  }

  handleClick=()=>this.setState({show:!this.state.show})
  

  render() {
    return (
    <div className="App">
    <button onClick={this.handleClick}>click me</button>
    { this.state.show? <Person/> :(<h2>oups click sur le button pour afficher le contunu </h2>)}
    </div>
    )
  }
}
