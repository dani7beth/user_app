import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Demo/Home';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import UserProfile from './components/UserProfile';
import { Container } from 'semantic-ui-react';

const App = () => (
  <>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path='/' render={()=><Home />}/>
        <Route exact path='/user/profile' render={()=><UserProfile />}/>
        <Route component={NoMatch} />
      </Switch>
      </Container>
    </>
);
export default App;
