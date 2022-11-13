import React from 'react';

import PropTypes from 'prop-types';
import Input from './Input';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

const FormField = ({ name, type, placeholder }) => {
  const { errors, touched, handleChange, setFieldTouched } = useFormikContext();

  return (
    <>
      <Input
        name={name}
        type={type}
        onChange={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        placeholder={placeholder}
      />
      <ErrorMessage
        error={errors[name]}
        visible={touched[name]}
      />
    </>
  );
};

FormField.propTypes = {};

export default FormField;
