import React, {Component} from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div className="App">
              <div className="App-header">
				<Navbar inverse collapseOnSelect>
				   <Navbar.Header>
					 <Navbar.Brand>
						<a href="#">Oh My Neovim</a>
					 </Navbar.Brand>
					 <Navbar.Toggle />
				   </Navbar.Header>
				   <Navbar.Collapse>
					 <Nav>
					   <NavItem eventKey={1} href="#">Getting started</NavItem>
					   <NavDropdown eventKey={3} title="Plugins" id="basic-nav-dropdown">
						 <MenuItem eventKey={3.1}>Default</MenuItem>
						 <MenuItem eventKey={3.2}>Javascript</MenuItem>
						 <MenuItem eventKey={3.3}>...</MenuItem>
						 <MenuItem divider />
						 <MenuItem eventKey={3.3}>React</MenuItem>
					   </NavDropdown>
					 </Nav>
					 <Nav pullRight>
					   <Button bsStyle="link" href="https://github.com/oh-my-neovim/oh-my-neovim" target="_blank">GitHub</Button>
					 </Nav>
				   </Navbar.Collapse>
				 </Navbar>
            </div>
            <p className="App-intro">
              This page is not ready.
            </p>
          </div>
        );
    }
}

export default App;
