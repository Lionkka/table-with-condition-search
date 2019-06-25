import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


export default function Statistic ({ data, groupBy }) {
  const dataToShow = groupData(data, groupBy)
  return <List>
    {dataToShow.map(({ name, count }) =>
      <ListItem key={name}>
        <ListItemText primary={`${name}: ${count}`}/>
      </ListItem>)}

  </List>
}

function groupData (data, groupBy) {
  const groups = {}
  for (let i = 0; i < data.length; i++) {
    const value = data[i][groupBy]
    !groups[value]
      ? groups[value] = 1
      : groups[value] += 1
  }

  return Object
    .entries(groups)
    .map(([key, value]) => ({ name: key, count: value }))
}

Statistic.propTypes = {
  data: PropTypes.array,
  groupBy: PropTypes.string
}
