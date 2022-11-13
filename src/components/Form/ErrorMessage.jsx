import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return;
  return <p className='text-red-600 text-xl'>{error}</p>;
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
