import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, type = 'text', onBlur, onChange, placeholder }) => {
  return (
    <input
      onBlur={onBlur}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
};

export default Input;
