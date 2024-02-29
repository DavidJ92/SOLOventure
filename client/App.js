// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Journal from './pages/Journal';
import Communities from './pages/Communities';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/communities" component={Communities} />
        <Route path="/journal" component={Journal} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
