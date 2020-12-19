import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Demo/Home';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Users from './components/Users';

function App() {
  return (
    <>
    
    <div>
    <NavBar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/users' component={Users} />
        <Route component={NoMatch} />
      </Switch>
    </div>
    </>
  )
}

export default App;
