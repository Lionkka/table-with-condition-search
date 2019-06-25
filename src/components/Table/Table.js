import React from 'react'
import PropTypes from 'prop-types'
import MaterialTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

import Cell from './Cell'

export default function Table ({ columns, data, handleChangeCell }) {
  return (
    <MaterialTable>
      <TableHead>
        <TableRow hover>
          {columns.map(({ label }) =>
            <TableCell key={label}>{label}</TableCell>
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(row => (
          <TableRow key={row.id} hover>
            {columns.map(({ label, name, transform, type, options }) =>
              <Cell
                key={name}
                type={type}
                label={label}
                options={options}
                value={transform ? transform(row[name]) : row[name]}
                handleChangeCell={(e)=> handleChangeCell(row.id, e)}/>
            )}
          </TableRow>
        ))}
      </TableBody>
    </MaterialTable>
  )
}

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  handleChangeCell: PropTypes.func
}
