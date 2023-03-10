import { useState, Component } from 'react'
import User from './User'

import classes from './Users.module.css'

// CLASS-BASED COMPONENT
class Users extends Component {
  // initializing state - state will always be an object in class-based components. the name also has to be 'state'
  constructor() {
    super()
    this.state = {
      showUsers: true,
    }
  }
  
  toggleUsersHandler() {
    this.setState((curState) => {
      return {showUsers: !curState.showUsers}
    })
  }
  
  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    )

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    )
  }
}


// FUNCTIONAL COMPONENT
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true)

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState)
//   }

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   )

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   )
// }

export default Users
