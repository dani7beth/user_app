import { useContext } from "react";
import { Card, Image } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider"

const User = () =>{
  const {avatar , firstName, lastName, number, email} = useContext(UserContext)
 return(
  
        <Card>
        <Image src={avatar} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{firstName} {lastName}</Card.Header>
          <Card.Meta>
            {number}
          </Card.Meta>
          <Card.Description>
            {email} 
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
         <p>edit</p>
        </Card.Content>
      </Card>
 )
 
}
export default User;