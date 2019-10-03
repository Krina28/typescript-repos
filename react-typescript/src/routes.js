import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';
import App from './App';
import List from './components/list';
import Recipe from './components/recipe';
import Footer from './components/footer';

function Routes() {
    return (
        <Router>
            <div>
                <Nav>
                    <NavItem>
                        <Link to="/"><NavLink>Home</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/list"><NavLink>All Recipes</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/categories"><NavLink>Categories</NavLink></Link>
                    </NavItem>
                </Nav>
                <Route path="/" exact component={App} />
                <Route path="/list" component={List} />
                <Route path="/receipe/:id" component={Recipe} />
                <Footer />
            </div>
        </Router>
    )
}

export default Routes;
