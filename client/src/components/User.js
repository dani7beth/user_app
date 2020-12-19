import { Card , Image} from "semantic-ui-react";

const User = ({user}) => (
  <Card>
    <Image src={user.avatar} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{user.firstName} {user.lastName}</Card.Header>
      <Card.Meta>
        {user.number}
      </Card.Meta>
      <Card.Meta>
        {user.email}
      </Card.Meta>
    </Card.Content>
  </Card>
)
export default User;