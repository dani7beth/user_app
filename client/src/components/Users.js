import React from 'react';
import User from './User';
import {UserConsumer} from '../providers/UserProvider';
import { Grid } from 'semantic-ui-react';

const Users = () =>(
  <>
  {/* taking value from user consumer and mapping over it to make user cards */}
  <UserConsumer>
    {value => (
      <Grid>
        <Grid.Row columns={3}>
          {value.users.map((user)=>{
            return(
              <User user={user}/>
            ) 
          })}
        </Grid.Row>
      </Grid>
    )}
  </UserConsumer>
  </>
)
export default Users;
  
