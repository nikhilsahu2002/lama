import React, { useState } from "react";
import "./App.css";
import Home from "./component/Home";
import ProjectsHome from "./component/ProjectsHome";
import UploadNav from "./component/UploadNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    // Set the isFormSubmitted state to true when the form is submitted
    setIsFormSubmitted(true);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {!isFormSubmitted ? (
              <Home onFormSubmit={handleFormSubmit} />
            ) : (
              <ProjectsHome isFormSubmitted={isFormSubmitted} />
            )}
          </Route>
          <Route exact path="/Home">
            <UploadNav />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
