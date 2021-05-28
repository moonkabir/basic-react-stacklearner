import React, {Component}from 'react';
import Inputs from './inputs'
class App extends Component {
    state = {
        name: ''
    };

    handleChange = event =>{
        this.setState({name: event.target.value});
    };
    handleFocus = event =>{
        console.log("I am Focus Event")
    }
    handleBlur = event =>{
        if(!this.state.name){
            alert("Please Enter Your Name")
        }
        console.log("I am Blur Event")
    }

    render() {
        return (
            <div>
                <Inputs />
                <input 
                    type="text"
                    placeholder="Enter Some Text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
                <br/>
                <br/>
                {this.state.name && <h3> Welcome, {this.state.name}</h3>}
                
            </div>
        )
    }
}
export default App;