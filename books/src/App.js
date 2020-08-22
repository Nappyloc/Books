import React from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import './App.css';
import Main from './pages/Main'


function App() {

 return(
   <BrowserRouter>
    <Switch>
      <Route exact path="/Books" component={Main}/>
      <Route path='/google.com' component={() => { 
     window.location.href = 'https://google.com'; 
     return null;}}/>
      
    </Switch>
   </BrowserRouter>

 ) 

 
}

export default App;
