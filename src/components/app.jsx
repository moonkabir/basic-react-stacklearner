import React, {Component}from 'react';
import Inputs from './inputs';
import UnControlledForm from './forms/uncontrolledform';
import ControlledForm from './forms/controlledform';
import SplitForm from './split-form';
import SignupForm from './signup-form';
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
            <div style={{"width":"500px","margin": "100px auto"}}>
                {/* <ControlledForm /> */}
                {/* <UnControlledForm /> */}
                <SplitForm />
                {/* <Inputs /> */}
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
                <SignupForm/>
            </div>
        )
    }
}
export default App;