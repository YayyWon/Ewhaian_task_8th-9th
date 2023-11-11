import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import AboutPage from './components/views/AboutPage/AboutPage'
import SkillsPage from './components/views/SkillsPage/SkillsPage'
import WorksPage from './components/views/WorksPage/WorksPage'


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/skills" component={SkillsPage} />
          <Route exact path="/works" component={WorksPage} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
