import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from './Hello';
import App from './App';
import List from './components/list';

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
                        <li>
                            <Link to="/app">Second Product</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Hello} />
                <Route path="/app" component={App} />
                <Route path="/list" component={List} />
            </div>
        </Router>
    )
}

export default Routes;
