import React from 'react';
import { Switch, Route,} from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'

function App() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
      <Home />
      <About />
    </Switch>
  );
}

export default App;


//TODO
//pages set up
  //components for pages
    //navbar
    //FOOTER
    //latest 
//routing

//NCT1000MILES
  //porcupine lake wilderness
