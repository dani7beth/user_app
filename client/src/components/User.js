import { Card , Grid, Image} from "semantic-ui-react";
import styled from 'styled-components';

const User = ({user}) => (
  <Grid.Column>
    <StyledCard>
    <Image src={user.avatar} wrapped ui={false} />
    <Truncated>
    <Card.Content>
      <Card.Header>{user.firstName} {user.lastName}</Card.Header>
      <Card.Meta>
        {user.number}
      </Card.Meta>
      <Card.Meta>
        {user.email}
      </Card.Meta>
    </Card.Content>
    </Truncated>
  </StyledCard>

  </Grid.Column>
)
export default User;

const Truncated = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledCard = styled(Card)`
  min-height: 200px !important;
  margin-bottom: 10% !important;
`;

