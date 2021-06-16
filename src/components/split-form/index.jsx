import React from 'react';
import Form from './form';


class SplitForm extends React.Component {
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
    };
    render() {
        // const { name, email, password } = this.state;
        return (
            <div>
                <h1>Split Form</h1>
                <Form
                    values={this.state}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    />
            </div>
        );
    }
}

export default SplitForm