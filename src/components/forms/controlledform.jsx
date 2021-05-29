import React from 'react';

class ControlledForm extends React.Component {
    state ={
        name: '',
        email: '',
        password: ''
    };
    handleSubmit = event => {
        event.preventDefault();

        console.log(this.state);
        event.target.reset();
        this.setState({name: '', email: '', password: ''});
    }
    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    render() {
        const { name, email, password } = this.state;
        return (
            <div>
                <h1>ControlledForm Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="Moon Kabir"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        placeholder="moon@gmail.com" 
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        className="form-control" 
                        placeholder="*****" 
                        value={password}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default ControlledForm