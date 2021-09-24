import React from "react";
import PropTypes from "prop-types";

export const InputFilter = ({ label, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="input-filter">{label}</label>
      <input
        id="input-filter"
        style={{ marginLeft: "10px" }}
        onChange={handleChange}
      />
    </div>
  );
};

InputFilter.defaultProps = {
  onChange: () => {},
};

InputFilter.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
