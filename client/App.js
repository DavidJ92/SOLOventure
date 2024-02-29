import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Journal from '../pages/Journal';
import Communities from '../pages/Communities';
import NavBar from '../components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/journal" component={Journal} />
        <Route path="/communities" component={Communities} />
      </Switch>
    </Router>
  );
}

export default App;

