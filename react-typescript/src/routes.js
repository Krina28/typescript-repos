import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import List from './components/list';
import Recipe from './components/recipe';
import Footer from './components/footer';

function Routes() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/list">List</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={App} />
                <Route path="/list" component={List} />
                <Route path="/receipe/:id" component={Recipe} />
                <Footer />
            </div>
        </Router>
    )
}

export default Routes;
