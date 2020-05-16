import React, { ReactElement } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { MainNavigation } from './mainNavigation/MainNavigation';

function Landing(): ReactElement {
  return (
    <>
      <div>glūck</div>
      <div>gifting made happy</div>
      <Link to={'/about'}>
        <button>Find out more</button>
      </Link>
    </>
  );
}

function App() {
  return (
    <>
      <MainNavigation />
      <Switch>
        <Route path='/about'>
          <div>About Page</div>
        </Route>

        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </>
  );
}

export default App;
