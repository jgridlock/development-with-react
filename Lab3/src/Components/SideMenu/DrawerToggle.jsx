import React from 'react';
import PropTypes from 'prop-types';

import './DrawerToggle.css';

const DrawerToggle = (props) => {
  const { onDrawerToggleClick } = props;

  return (
    <button className='toggle-button' type='button' onClick={ onDrawerToggleClick }>
      <div className='toggle-button-line' />
      <div className='toggle-button-line' />
      <div className='toggle-button-line' />
    </button>
  );
};

DrawerToggle.propTypes = {
  onDrawerToggleClick: PropTypes.func.isRequired,
};

export default DrawerToggle;
