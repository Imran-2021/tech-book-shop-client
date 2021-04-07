import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header';
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Admin from "./Components/Admin";
import Login from "./Components/Login";
import LogOut from "./LogOut";
import Orders from "./Components/Orders";
import PrivateRoute from "./Components/PrivateRoute";


export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
      {/* <p>Book Name:{loggedInUser.namee}</p>
      <p>Book Price:{loggedInUser.pricee}</p>
      <p>Name: {loggedInUser.name}</p>
      <p>Email: {loggedInUser.email}</p> */}
    <Router>
      <Header/>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
          <PrivateRoute  path="/orders">
            <Orders />
          </PrivateRoute>
          <Route  path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <Route path="/logout">
            <LogOut/>
          </Route>
          <PrivateRoute path="/dashboard/:abc">
            <Dashboard />
          </PrivateRoute>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
