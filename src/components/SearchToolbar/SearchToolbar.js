import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import Paper from '@material-ui/core/Paper'
import SearchIcon from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'

import './style.scss'

export default class SearchToolbar extends PureComponent {
  state = {
    search: ''
  }

  onChangeSearch = (event) => {
    this.setState({ search: event.target.value })
  }

  onKeyDownSearch = (event) => {
    if (event.key === 'Enter') {
      this.onSearch()
    }
  }

  onSearch = () => {
    this.props.onSearch(this.state.search)
  }

  render () {
    const { search } = this.state
    return <Paper className="criteria-search-root">
      <InputBase
        onKeyDown={this.onKeyDownSearch}
        value={search}
        onChange={this.onChangeSearch}
        placeholder="Search"
        className="search-input"
      />
      <IconButton
        aria-label="Search"
        onClick={this.onSearch}
      >
        <SearchIcon/>
      </IconButton>
    </Paper>
  }
}

SearchToolbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
}
