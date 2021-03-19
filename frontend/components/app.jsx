import React from "react";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import LandingPage from "./landing_page/landing_page";
import Splash from "./splash/splash";
import NavBarContainer from "./nav/navbar_container";
import { Route, Link, Switch } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";


const App = () => (
   <div>
       <header>
           <NavBarContainer />
       </header>
       <Switch>
            <AuthRoute exact path="/" component={Splash} />
            <ProtectedRoute path="/home" component={LandingPage} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
        </Switch>
   </div>
);


export default App;