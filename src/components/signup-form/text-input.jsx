import React from 'react';
import propTypes from 'prop-types';

const TextInput = props => (
    <div className="from-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input 
            className =  {props.error ? 'form-control is-invalid' : 'form-control'}
            type= {props.type}
            name= {props.name}
            id= {props.name}
            placeholder= {props.placeholder}
            value= {props.value}
            onChange= {props.onChange}
        />
        {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
);

TextInput.propTypes = {
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    error: propTypes.string,
    type: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
};

TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
}
export default TextInput;