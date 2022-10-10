import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Signup from "./pages/Signup";
import Feedback from "./pages/Feedback";
import AddQuery from "./pages/AddQuery";
//import FormFeedbackMU from "./components/Forms/FormStudentFeedbackMU";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/feedback" component={Feedback} />
        <Route exact path="/addquery" component={AddQuery} />
      </Switch>
    </div>
  );
}

export default App;
