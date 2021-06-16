import React from 'react';
import propTypes from 'prop-types';
import TextInput from './text-input';

const Form = props =>(
    <form onSubmit={props.handleSubmit}>
        <TextInput
            name="name"
            label="Enter Name"
            placeholder="Moon Kabir"
            value={props.values.name}
            onChange={props.handleChange}
        />
        <TextInput
            name="email"
            type="email"
            label="Enter EMail"
            placeholder="a@b.c"
            value={props.values.email}
            onChange={props.handleChange}
        />
        <TextInput
            name="password"
            type="password"
            label="Enter Password"
            placeholder="**********"
            value={props.values.password}
            onChange={props.handleChange}
        />
        <button type="submit">Submit</button>
    </form>
);

Form.propTypes = {
    values: propTypes.object.isRequired,
    handleChange: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired,
}

export default Form