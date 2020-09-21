import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Calculator} from './pages/calculator';
import {Conditions} from './pages/conditions';
import {NoMatch} from './pages/404';


function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Calculator}/>
            <Route exact path="/calculator" component={Calculator}/>
            <Route exact path="/conditions" component={Conditions}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
    </React.Fragment>
  );
}


export default App;
