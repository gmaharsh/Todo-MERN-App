import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import User from '../User/User';
import { BrowserRouter as Router, Route} from "react-router-dom";

const Layout = ( props ) =>(
    <div className="Layout">
        <Router>
            <Navbar />
            <Route path="/user" component={User} />
        </Router>
    </div>
)

export default Layout;