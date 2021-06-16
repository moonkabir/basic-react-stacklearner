import React from 'react';
import propTypes from 'prop-types';
import TextInput from './text-input';

const Form = ({ values, agreement, handleChange, handleagrrement, handleSubmit}) =>{
    return (
        <form onSubmit ={handleSubmit}>
            <TextInput
                name="name"
                label="Name"
                placeholder="Moon Kabir"
                value={values.name}
                onchange={handleChange}
            />
            <TextInput
                name="email"
                type="email"
                label="Email"
                placeholder="a@b.com"
                value={values.email}
                onchange={handleChange}
            />
            <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="******"
                value={values.password}
                onchange={handleChange}
            />
            <TextInput
                name="birthDate"
                type="date"
                label="BirthDate"
                placeholder="Moon Kabir"
                value={values.birthDate}
                onchange={handleChange}
            />
            <div className="form-group">
                <label>
                    <input className="form-group" type="radio" name="gender" value="Male" onChange={handleChange}/>Male
                    <input className="form-group" type="radio" name="gender" value="Female" onChange={handleChange}/>Female
                    <input className="form-group" type="radio" name="gender" value="Other" onChange={handleChange}/>Other
                </label>
            </div>
            <div className="form-group">
                <label>
                    <input className="form-group" type="checkbox" name="agreement" checked={agreement} onchange={handleagrrement}/>
                    I agree to the agreement
                </label>
            </div>
            <button className="btn btn-primary" type="submit" disabled={!agreement}>Create User</button>
        </form>
    );
};

Form.propTypes = {
    values: propTypes.object.isRequired,
    agreement: propTypes.bool.isRequired,
    handleChange: propTypes.func.isRequired,
    handleagrrement: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired,
}


export default Form;