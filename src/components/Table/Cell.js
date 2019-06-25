import React from 'react'
import TableCell from '@material-ui/core/TableCell'

import Select from '../Select'

export default function Cell ({ value, handleChangeCell, type, options, label }) {
  switch (type) {
    case 'dropdown': {
      return <TableCell>
        <Select
          handleChange={handleChangeCell}
          options={options}
          value={value}
          label={label}
        />
      </TableCell>
    }
    case 'string':
    default: {
      return <TableCell>{value}</TableCell>
    }
  }
}
