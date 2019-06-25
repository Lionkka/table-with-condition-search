import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import { fetchUsers, changeUser } from '../../actions/users'

const mapStateToProps = ({ users }) => ({
  users
})

const mapDispatchToProps = { fetchUsers, changeUser }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
