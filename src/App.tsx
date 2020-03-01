import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/about'>
                    <div>About Page</div>
                </Route>
                <Route path='/'>
                    <div>glūck</div>
                    <div data-testid={'navigation-bar'}>gifting made happy</div>
                    <Link to={'/about'}>
                        <button>Find out more</button>
                    </Link>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
