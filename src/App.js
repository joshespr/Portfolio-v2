import React, { Component } from 'react';
import Nav from './components/Nav';
import Home from './sections/Home';


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Nav>
          <li><a href="/passport">Passport</a></li>  
          <li><a href="/login">Log in</a></li>  
          <li><a href="/signup">Sign up</a></li>  
        </Nav>
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
