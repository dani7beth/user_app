import React from 'react';
import Axios from 'axios';

//initial context
export const UserContext = React.createContext();

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
  state = {};
  

  //make axios call
  componentDidMount = () =>{
    Axios.get(`/api/users`)
    .then((res)=> {
      this.setState(res.data[0]);
      // console.log(res.data[0]);
    })
  }

  //update user
  updateUser = (user) => {
    this.setState({...user});
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


