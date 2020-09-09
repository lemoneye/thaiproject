import React from 'react';
import './App.css';
import NavBar from '../src/Components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import joe from '../src/Components/pages/joe';
import home from '../src/Components/pages/home';
import Noon from '../src/Components/pages/Noon';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/joe" component={joe} />;
          <Route exact path="/noon" component={Noon} />;
          <Route exact path="/" component={home} />;
        </Switch>
      </Router>

    </div>
  );
}

export default App;
