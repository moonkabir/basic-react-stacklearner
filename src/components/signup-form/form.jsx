import React from 'react';
import propTypes from 'prop-types';
import TextInput from './text-input';

const Form = ({ values, agreement, errors, handleChange, handleagrrement, handleSubmit}) =>{
    return (
        <form onSubmit ={handleSubmit}>
            <TextInput
                name="name"
                label="Name"
                placeholder="Moon Kabir"
                value={values.name}
                error={errors.name}
                onChange={handleChange}
            />
            <TextInput
                name="email"
                type="email"
                label="Email"
                placeholder="a@b.com"
                value={values.email}
                error={errors.email}
                onChange={handleChange}
            />
            <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="******"
                value={values.password}
                error={errors.password}
                onChange={handleChange}
            />
            <TextInput
                name="birthDate"
                type="date"
                label="BirthDate"
                placeholder="Moon Kabir"
                value={values.birthDate}
                error={errors.birthDate}
                onChange={handleChange}
            />
            <div className="form-group">
                <label>
                    <input className="form-group" type="radio" name="gender" value="Male" onChange={handleChange}/>Male
                    <input className="form-group" type="radio" name="gender" value="Female" onChange={handleChange}/>Female
                    <input className="form-group" type="radio" name="gender" value="Other" onChange={handleChange}/>Other
                </label>
                {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
            </div>
            <div className="form-group">
                <label>
                    <input className="form-group" type="checkbox" name="agreement" checked={agreement} onChange={handleagrrement}/>
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
    errors: propTypes.object.isRequired,
    handleChange: propTypes.func.isRequired,
    handleagrrement: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired,
}


export default Form;