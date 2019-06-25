import FormControl from '@material-ui/core/FormControl'
import React from 'react'
import PropTypes from 'prop-types'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import MaterialSelect from '@material-ui/core/Select'

export default function Select ({ value, handleChange, label, options }) {

  return <FormControl>
    <InputLabel htmlFor={label}>{label}</InputLabel>
    <MaterialSelect
      value={value}
      onChange={handleChange}
      id={label}
    >
      {options.map((option) =>
        <MenuItem
          key={option}
          value={option}>
          {option}</MenuItem>)}
    </MaterialSelect>
  </FormControl>
}

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired
}
