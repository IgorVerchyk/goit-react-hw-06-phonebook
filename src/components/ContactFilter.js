import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ onChange }) {
  return (
    <label>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}

Filter.propTupes = {
  onChange: PropTypes.func.isRequired,
};
