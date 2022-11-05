import React from 'react';
import './App.css';
import Navibar from './components/Navibar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/projects';
import Contact from './components/Contact';
import DigitalClock from './components/extra-comp/projects/DigitalClock/DigitalClock';
import {  Switch, Route, Router, Redirect } from 'react-router-dom';
import Weather from './components/extra-comp/projects/Weather/components/Weather';
import Covid from './components/extra-comp/projects/Covid/Covid';
import PushUps from './components/extra-comp/projects/PushUps/PushUps';
import Math from './components/extra-comp/projects/Math/Math';
import { UAParser } from 'ua-parser-js'
import Loader from './logos/Loader';
import Everything from './components/Everything';

function App() {
  let a, b;

  var parser = new UAParser();
  let os = parser.getDevice();
  console.log(parser.getDevice());

  if (os.model == "iPhone") {
    a = "navup idesign";
    b = "idesign";
  } else {
    a = " fix2 navdown";
    b = "fix2 navdown"
  }

  return (
    <>
     <div  className={a}>
        <Navibar  className={b} />
      </div>

    <Switch>
    <Redirect exact from="/mysite" to="/mysite/home" />
    <Route exact path='/mysite/home' component={Home}/>
    <Route exact path='/mysite/about' component={About}/>
    <Route exact path='/mysite/projects' component={Projects}/>
    <Route exact path='/mysite/projects/digitalclock' component={DigitalClock}/>
    <Route exact path='/mysite/projects/weather' component={Weather}/>
    <Route exact path='/mysite/projects/covid' component={Covid}/>
    <Route exact path='/mysite/projects/pushups' component={PushUps}/>
    <Route exact path='/mysite/projects/math' component={Math}/>
    <Route exact path='/mysite/contact' component={Contact}/>
    <Route exact path='/mysite/loader' component={Loader}/>
    </Switch>
    </>
  );
}

export default App;
