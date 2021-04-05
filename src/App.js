import React from 'react'
import Home from './Pages/Home'
import Products from "./Pages/Products"
import 'semantic-ui-css/semantic.min.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
const App = () =>{
    return <div>
        <Router>
        <Switch exact>
          <Route exact path="/" component = {Home} />
          <Route  exact path="/products" component = {Products} />
          <Route exact path="/dashboard" component = {Home} />
        </Switch>
        </Router>
        
    </div>
}

export default App



