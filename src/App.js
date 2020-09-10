import React from 'react';
import './App.css';
import NavBar from '../src/Components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import joe from '../src/Components/pages/joe';
import home from '../src/Components/pages/home';
import Noon from '../src/Components/pages/Noon';
<<<<<<< HEAD
import nokyoong from '../src/Components/pages/nokyoong';
=======
import Kate from '../src/Components/pages/Kate';
>>>>>>> e5197d6bb8d8db1d05e4a7cdf5fb3713985c0bd4

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/joe" component={joe} />;
          <Route exact path="/noon" component={Noon} />;
          <Route exact path="/" component={home} />;
<<<<<<< HEAD
          <Route exact parth="/" component={nokyoong} />;
=======
          <Route exact path="/kate" component={Kate} />;
>>>>>>> e5197d6bb8d8db1d05e4a7cdf5fb3713985c0bd4
        </Switch>
      </Router>

    </div>
  );
}

export default App;
