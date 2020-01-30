import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Gallery from './Components/Gallery';
import Visitor from './Components/Visitor';
import ShowDate from './Components/ShowDate';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import './Components/css/communCSS.css';

const App = () => {

  return (
    <Router>
      <div className="App" >
        <Navbar />
              <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/visitor" component={Visitor} />
              <Route path="/showDate" component={ShowDate} />
            </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
