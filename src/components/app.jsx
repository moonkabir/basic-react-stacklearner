import React, {Component}from 'react';

class App extends Component {
    state = {
        name: ''
    };

    handleChange = event =>{
        this.setState({name: event.target.value});
    };


    render() {
        return (
            <div>
                <input 
                    type="text"
                    placeholder="Enter Some Text"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <br/>
                <br/>
                {this.state.name && <h3> Welcome, {this.state.name}</h3>}
                
            </div>
        )
    }
}
export default App;