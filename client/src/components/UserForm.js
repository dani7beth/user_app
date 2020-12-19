import Axios from "axios";
import { useContext, useState } from "react"
import { Form } from "semantic-ui-react"
import { UserContext } from "../providers/UserProvider";

const UserForm = (props) =>{

  const {
    updateUser,
    firstName: defaultFirst,
    lastName: defaultLast,
    email: defaultEmail,
    number: defaultNumber,
    avatar: defaultAvatar,
    id: id,
  } = useContext(UserContext);

  const [firstName, setFirstName] = useState(defaultFirst);
  const [lastName, setLastName] = useState(defaultLast);
  const [email, setEmail] = useState(defaultEmail);
  const [number, setNumber] = useState(defaultNumber);
  const [avatar, setAvatar] = useState(defaultAvatar);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(id);
      Axios.put(
        `/api/users/${id}`, 
        {firstName: firstName, 
          lastName: lastName, 
          email: email, 
          number: number,
          avatar: avatar
        }).then((res) => updateUser(res.data));
  }
  

  return(
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Input 
        label='First Name'
        name='firstName'
        value={firstName}
        onChange={(e, {value})=>{
          setFirstName(value);
        }}
        />
        <Form.Input 
        label='Last Name'
        name='lastName'
        value={lastName}
        onChange={(e, {value})=>{
          setLastName(value);
        }}
        />
        <Form.Input 
        label='Email'
        name='email'
        value={email}
        onChange={(e, {value})=>{
          setEmail(value);
        }}
        />
        <Form.Input 
        label='Number'
        name='number'
        value={number}
        onChange={(e, {value})=>{
          setNumber(value);
        }}
        />
        <Form.Input 
        label='Avatar'
        name='avatar'
        value={avatar}
        onChange={(e, {value})=>{
          setAvatar(value);
        }}
        />
        <Form.Button type="submit">edit</Form.Button>
      </Form>

    </>
  )
  
}
export default UserForm; 