import React from 'react';
import propTypes from 'prop-types';

const textInput = props => (
    <div className="from-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input 
            className = "form-control"
            type= {props.type}
            name= {props.name}
            id= {props.name}
            placeholder= {props.placeholder}
            value= {props.value}
            onChange= {props.onChange}
        />
    </div>
);

textInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
}
export default textInput;