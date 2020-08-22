import React from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import './App.css';
import Main from './pages/Main'


function App() {

 return(
   <BrowserRouter>
    <Switch>
      <Route exact path="/Books" component={Main}/>
    </Switch>
   </BrowserRouter>

 ) 

 
}

export default App;
