import React, {useEffect} from 'react';Hanover Lofts Apt 2, Hanover St E, Dublin Docklands, Dublin
import './App.css';
import Header from "./Header"
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from "./Checkout";
import Login from "./Login"
import {useStateValue} from "./StateProvider";
import {auth} from "firebase";

function App() {
    //Importing the data layer
const [{basket}, dispatch] = useStateValue();

  return (
      <Router>
         <div className="app">
             <Switch>
                 <Route path ="/checkout">
                 <Header/>
                 <Checkout/>
                 </Route>
                 <Route path="/login">
                     <Login/>
                 </Route>
                 {/* This is the default route, homepage */}
                 <Route path="/">
                     <Header/>
                     <Home />

                 </Route>
             </Switch>
             <footer className="footer">
             <p className="name">Amazon By David O'Reilly</p>
                 <p>Email: David.o.reilly@outlook.com</p>
             </footer>
        </div>
      </Router>
  );
}

export default App;
