import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          {/* <h2>Welcome to React Router Tutorial</h2> */}
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav> */}

        <Navbar expand="lg">          
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Brand href="/">Tutorial</Navbar.Brand>
          <Form className="form-center">
          <FormControl type="text" placeholder="Search" className="" />
          </Form>

          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          </Nav>
          </Navbar.Collapse>

        </Navbar>


          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;