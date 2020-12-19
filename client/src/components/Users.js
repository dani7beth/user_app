import React from 'react';
import User from './User';
import {UserConsumer} from '../providers/UserProvider';

const Users = () =>(
  <>
  <UserConsumer>
    {value => (
      value.users.map((user)=>{
       return(
        <User user={user}/>
       ) 
      })
    )}
  </UserConsumer>
  </>
)
export default Users;
  
