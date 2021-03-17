import React from "react";
import SignupContainer from "./session/signup_container";
import { Route } from "react-router-dom";
import Signup from "./session/signup";

const App = () => (
   <div>
       <h1>Hey bestie this is React</h1>
       <Route path="/signup" component={SignupContainer} />
   </div>
)


export default App;