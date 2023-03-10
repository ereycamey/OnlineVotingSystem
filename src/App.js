import React from 'react';
import NavBar from "./components/NavBar"
import {
  BrowserRouter as Router, Switch,
  Route, Redirect,
} from "react-router-dom";
import VotingList from "./components/VotingList";
import Users from "./components/Users";
import LoginForm from './components/loginform';


function App() {
  return (


    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/navbar" component={NavBar} />
        <Route path="/votinglist" component={VotingList} />
        <Route path="/users" component={Users} />
        <Redirect to="/" />
      </Switch>
    </Router>



  );
}

export default App;
