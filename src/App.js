import React, { Component } from 'react'
import Person from './components/Person'
import {Button} from 'react-bootstrap'
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={show:false}
  }

  handleClick=()=>this.setState({show:!this.state.show})
  
  render() {
    return (
    <div className="App">
    <Button className='show' variant="info" onClick={this.handleClick}>Cleck me</Button>
    { this.state.show? <Person/> :(<h2>oups click sur le button pour afficher le contenu </h2>)}
    </div>
    )
  }
}
