import React, { useState, useEffect } from "react" ;
import './App.css';
import NavBar from "./NavBar.js";
import AppCalendar from "./AppCalendar.js";
import History from "./History.js";
import AppForm from "./AppForm.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [show, setShow] = useState(true);
  const [invites, setinvites] = useState([]);

  const getInv = async () => {
    console.log("getting Inv");
    try {
      const _invites = await fetch("/calendar").then((res) => res.json());
      console.log("got posts", _invites);
     /* setPosts(_posts);*/
    } catch (err) {
      console.log("error ", err);
    }
  };

  useEffect(() => {
    getInv();
  }, [])  


  return (

    <div className="App">
    <NavBar></NavBar>



    <Router>
   

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <History />
          </Route>
          <Route path="/users">
            <AppForm />
          </Route>
          <Route path="/">
         <AppCalendar />
          </Route>
        </Switch>
    </Router>
    
    

    </div>
  );
}

export default App;

