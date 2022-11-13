import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, onClick, type = 'button', onSubmit }) => {
  return (
    <button
      // onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      className='px-12 py-4 bg-sky-700 hover:shadow-lg hover:shadow-sky-300 shadow-md shadow-blue-200 rounded-full text-white text-lg m-[1rem] font-semibold uppercase'
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
