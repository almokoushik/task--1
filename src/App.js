import React from "react";
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
export const UserContext=createContext(null)


function App() {
  const [userInfo,setUserInfo]=useState({})
  return (
    
    
    <div className="App">
      <UserContext.Provider value={[userInfo, setUserInfo]}>
        <Router>
            <Switch>

            <Route  exact path="/"><Home></Home> </Route>

            <Route path="/home"><Home></Home> </Route>

            <Route path="*"> <NotFound></NotFound> </Route>

            </Switch>
        </Router>
      </UserContext.Provider>


    </div>
    
  );
}

export default App;
