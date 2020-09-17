import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ReviewList from './pages/ReviewList';
import Relpy from './pages/Relpy';


function App() {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/relpy">
                        <Relpy />
                    </Route>
                    <Route path="/">
                        <ReviewList />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
