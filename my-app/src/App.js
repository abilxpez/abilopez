import React, { Component } from 'react';
import './App.css';
//import BoxLeft from './components/boxleft';
//import BoxRight from './components/boxright';
//import Button from './components/button';


//import image1 from './assets/pic.jpg';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";



class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>

      //</div>
    );
  }
}

/*<div>
      <BoxLeft title="About the Artist" text="“Kauppila's fascination with birds began with her childhood in rural Vermont. They represented to her a kind of freedom that humans could only emulate and watch from afar. This awe for the natural world led her in part to gravitate towards classical Chinese ink painting, incorporating its line and form as well as mastering it as a medium…”"
      imageURL = {image1} ></BoxLeft>

      <BoxRight title="About the Artist" text="“Kauppila's fascination with birds began with her childhood in rural Vermont. They represented to her a kind of freedom that humans could only emulate and watch from afar. This awe for the natural world led her in part to gravitate towards classical Chinese ink painting, incorporating its line and form as well as mastering it as a medium…”"
      imageURL = {image1} ></BoxRight>
      <div>
      <Button></Button>
      </div>*/


/*

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
