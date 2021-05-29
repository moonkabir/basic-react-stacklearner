import React from 'react';

class UnControlledForm extends React.Component {
    handleSubmit = event => {
        event.preventDefault();
        const data = {};
        // form data back from object
        // console.log(event.target.name.value);
        data.name = event.target.name.value;
        data.email = event.target.email.value;
        data.password = event.target.password.value;
        console.log(data);
        event.target.reset();
    }
    render() {
        return (
            <div>
                <h1>UnControlled Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" className="form-control" placeholder="Moon Kabir"/>
                    <input type="email" name="email" className="form-control" placeholder="moon@gmail.com"/>
                    <input type="password" name="password" className="form-control" placeholder="*****"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default UnControlledForm