import React, {useEffect, useState} from 'react';
import Axios from 'axios';

//initial context
const UserContext = React.createContext();

//create consumer
export const UserConsumer = UserContext.Consumer;

//create provider
class UserProvider extends React.Component{
  // //hardcoded state for now
  // state = {
  //   firstName: "Penelope",
  //   lastName: "Smith",
  //   email: "something@gmail.com",
  //   number: "123-345-4566",
  //   avatar: "somepicture.com"
  // };
  state = {
    users: []
  }

  //make axios call
  componentDidMount(){
    Axios.get(`/api/users`)
    .then((res)=> {
      const users = res.data;
      this.setState({users});
    })
  }

  render(){
    return(
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider;


