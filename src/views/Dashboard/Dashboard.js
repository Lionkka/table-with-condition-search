import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'

import Table from '../../components/Table'
import Statistic from '../../components/Statistic'
import SearchToolbar from '../../components/SearchToolbar'
import { userTableRows } from '../../config/userConfig'
import { searchByCriteria } from '../../utils'

import './style.scss'
import Typography from '@material-ui/core/Typography'


class Dashboard extends PureComponent {
  state = {
    searchCriteria: null
  }

  componentDidMount () {
    this.props.fetchUsers()
  }

  handleChangeStatus = (userId, event) => {
    const { users } = this.props
    const index = users.findIndex(({ id }) => id === userId)
    const user = { ...users[index] }
    user.status = event.target.value
    this.props.changeUser(user)
  }

  onSearch = (searchCriteria) => {
    this.setState({ searchCriteria })
  }

  render () {

    const { users } = this.props

    const data = searchByCriteria(users, this.state.searchCriteria)

    return <Paper className="dashboard-root">
      <SearchToolbar
        onSearch={this.onSearch}
      />
      <Typography
        className="help-text">
        You can use AND or OR operator to make conditional search. You can use Only one condition
      </Typography>
      <Table
        handleChangeCell={this.handleChangeStatus}
        columns={userTableRows}
        data={data}
      />
      <Statistic
        data={data}
        groupBy="status"
      />
    </Paper>
  }
}

export default Dashboard

Dashboard.propTypes = {
  changeUser: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
}
