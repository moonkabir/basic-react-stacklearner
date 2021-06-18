import React from 'react';
import propTypes from 'prop-types';
import Form from './form'

const initValues  = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: '',
}

class SignupForm extends React.Component {
    state = {
        values: initValues,
        agreement: false,
        errors: {}
    }

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name] : event.target.value
            }
        })
    }


    handleagrrement = event => {
        this.setState({
            agreement: event.target.checked
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { isValid, errors} = this.validate()
        if(isValid){
            console.log(this.state.values);
            this.props.createUser(this.state.values)
            event.target.reset();
            this.setState({values: initValues, agreement: false, errors: {} });
        }else{
            this.setState({errors});
            console.log(errors);
        }
    }

    validate = () =>{
        const errors = {}
        const { values: { name, email, password, gender, birthDate } } = this.state
        if(!name){
            errors.name = "Please provide your name";
        }
        if(!email){
            errors.email = "Please provide your email";
        }
        if(!password){
            errors.password = "Please provide your password";
        }
        if(!birthDate){
            errors.birthDate = "Please provide your birthDate";
        }
        if(!gender){
            errors.gender = "Please select your gender";
        }
        return{
            errors,
            isValid : Object.keys(errors).length === 0
        };
    }

    render() {
        return (
            <div>
                <h1>Signup Form</h1>
                <Form
                    values = {this.state.values}
                    agreement = {this.state.agreement}
                    errors = {this.state.errors}
                    handleChange = {this.handleChange}
                    handleagrrement = {this.handleagrrement}
                    handleSubmit = {this.handleSubmit}
                />
            </div>
        );
    }
}
SignupForm.propTypes = {
    createUser: propTypes.func.isRequired
}
export default SignupForm