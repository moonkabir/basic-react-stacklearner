import React, {Component}from 'react';
// import Inputs from './inputs';
// import UnControlledForm from './forms/uncontrolledform';
// import ControlledForm from './forms/controlledform';
// import SplitForm from './split-form';
import SignupForm from './signup-form';
class App extends Component {
    state = {
        name: '',
        users: []
    };

    createUser = user =>{
        user.id = new Date().getTime.toString();
        this.setState({
            users: [...this.state.users, user]
        })
    }

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
                {/* <SplitForm /> */}
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
                <SignupForm createUser={this.createUser}/>
                <div>
                    <h3>All registered Student</h3>
                    <ul className="list-group">
                        {this.state.users.map(user =>(
                            <li key={user.id} className="list-group-item">
                                {user.name} -> {user.email}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
export default App;