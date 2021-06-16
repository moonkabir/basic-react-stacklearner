import React from 'react';
import propTypes from 'prop-types';

const TextInput = props =>(
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input 
            className="form-control"
            type={props.type} 
            name={props.name} 
            id= {props.name} 
            placeholder={props.placeholder}
            value={props.value} 
            onChange={props.onChange}
        />
    </div>
);

TextInput.propTypes = {
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
}

TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
}

export default TextInput;