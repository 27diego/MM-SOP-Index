import React from "react";
import "./App.scss";
import history from "./history";

import { Route, Router, Switch } from "react-router-dom";

//domain pages
import SignIn from "./pages/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Main/Dashboard";
import Users from "./pages/Admin/ManageUsers/ManageUsers";
import SOPs from "./pages/Admin/ManageSOPs/ManageSOP";
import sopPage from "./pages/sopPage/sop-page";
import SignUp from "./pages/Actions/SignUp/SignUp";

//department pages
import Growing from "./pages/Departments/Growing/Growing";
import Harvesting from "./pages/Departments/Harvesting/Harvesting";
import Maintenance from "./pages/Departments/Maintenance/Maintenance";
import Packing from "./pages/Departments/Packing/Packing";
import QA from "./pages/Departments/QA/QA";
import Safety from "./pages/Departments/Safety/Safety";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/Dashboard" exact component={Dashboard} />
        <Route path="/Users" exact component={Users} />
        <Route path="/SOPs" exact component={SOPs} />
        <Route path="/Page:id" exact component={sopPage} />
        <Route path="/User/signUp" exact component={SignUp} />

        <Route path="/Growing" exact component={Growing} />
        <Route path="/Harvesting" exact component={Harvesting} />
        <Route path="/Maintenance" exact component={Maintenance} />
        <Route path="/Packing" exact component={Packing} />
        <Route path="/QA" exact component={QA} />
        <Route path="/Safety" exact component={Safety} />
      </Switch>
    </Router>
  );
}

export default App;
