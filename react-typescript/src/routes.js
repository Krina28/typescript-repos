import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from './Hello';
import App from './App';

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
                            <Link to="/">First Product</Link>
                        </li>
                        <li>
                            <Link to="/app">Second Product</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Hello} />
                <Route path="/app" component={App} />
            </div>
        </Router>
    )
}

export default Routes;
