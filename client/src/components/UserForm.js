import Axios from "axios";
import { useState } from "react"
import { Form } from "semantic-ui-react"

const UserForm = ({user}) =>{
  const [firstName, setFirstName] = useState(user ? user.firstName : '');
  const [lastName, setLastName] = useState(user ? user.lastName : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [number, setNumber] = useState(user ? user.number : '');
  const [avatar, setAvatar] = useState(user ? user.avatar : '');

  const handleSubmit = (e) =>{
    e.preventDefault();

      Axios.put(
        `/api/users/${user.id}`, 
        {firstName: user.firstName, 
          lastName: user.lastName, 
          email: user.email, 
          number: user.number,
          avatar: user.avatar
        }).then((res) => console.log(res.data));
  }
  

  return(
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Input 
        label='First Name'
        value={user.firstName}
        onChange={(e)=>{
          setFirstName(e.target.value);
        }}
        />
        <Form.Button type="submit" color="cyan">edit</Form.Button>
      </Form>

    </>
  )
  
}
export default UserForm; 