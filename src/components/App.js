import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';

function App() {
  
  return (
    <div className="App container p-5">
      <NavBar/>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <AuthenticatedRoute exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
