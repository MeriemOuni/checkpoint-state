import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
        super(props)
        this.person={
            fullname:"this is my name",
            bio:"this is bio",
            profession:"student",
            imgSrc:"https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true",
        }
        this.state={count:0}
    }
    componentDidMount(){
        setInterval(() => {
            this.setState(prevState=>({
                count: prevState.count+1
            }))
        }, 1000);
    }

    componentWillUnmount() {
    clearInterval(this.state);
    }
    
    render() {
        return (
            <div>
                <h2>{this.person.fullname}</h2>
                <h2>{this.person.bio}</h2>
                <h2>{this.person.profession}</h2>
                <div>counter : {this.state.count}</div>
                <img style={{width:'600px'}} src={this.person.imgSrc} alt='pic'></img>
                
            </div>
        )
    }
}

