import React from 'react';
import './App.css';
import NavBar from '../src/Components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import joe from '../src/Components/pages/joe';
import home from '../src/Components/pages/home';
import Noon from '../src/Components/pages/Noon';
import nokyoong from '../src/Components/pages/nokyoong';
import Kate from '../src/Components/pages/Kate';
import Ken from '../src/Components/pages/Ken';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/joe" component={joe} />;
          <Route exact path="/noon" component={Noon} />;
          <Route exact path="/" component={home} />;
          <Route exact path="/nokyoong" component={nokyoong} />;
          <Route exact path="/kate" component={Kate} />;
          <Route exact path="/ken" component={Ken} />;
        </Switch>
      </Router>

    </div>
  );
}

export default App;
