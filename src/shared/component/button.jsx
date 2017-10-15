import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ label, handleClick }) =>
  (
    <button
      onClick={handleClick}
      className="btn btn-primary"
      type="button"
    >
      {label}
    </button>
  )

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Button
