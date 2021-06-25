import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/about";
import Form from "./Components/form";
import Users from "./Components/users";
import Download from "./download.png";

function App(props) {
  const [userData, setUserData] = useState([]); //this hook will set user Data array

  const addUserData = (log) => {
    //a function takes in log as argument and adds user data
    let logs = [...userData, log]; //appends log to user data array
    setUserData(logs); //set value of user data as the new appended array
  };

  const badge = userData.length;
  useEffect(() => {
    console.log({ badge });
  });

  function Home() {
    return (
      <>
        <Form addUserData={addUserData} />
        <Users users={userData} />
      </>
    );
  }

  return (
    <div>
      <div className="App">
        <Router>
          <ReactBootStrap.Navbar bg="light" expand="sm" justify-content-center>
            <a class="nav-logo">
              <img src={Download} width="50" height="50" />
            </a>
            <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse>
              <a class="nav-link disabled">Badge Count: {badge}</a>
            </ReactBootStrap.Navbar.Collapse>
            <ul class="navbar-nav justify-content-end"></ul>
            <Link class="navbar-brand" to="/About">
              Registered User Database
            </Link>
          </ReactBootStrap.Navbar>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route
              path="/about"
              exact
              component={() => <Users users={userData} />}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
//  useEffect(function persistForm() {
//    localStorage.setItem("formData", name);
//  });
