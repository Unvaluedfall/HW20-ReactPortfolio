import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Portfolio from "./pages/Portfolio.js";
import NoMatch from "./pages/NoMatch.js";
import { Container } from "@material-ui/core";
// Material UI


function App() {
  return (
<Container maxWidth="sm">
<Router>
<div>
  <Switch>
    <Route exact path={["/", "/about"]}>
      <Portfolio />
    </Route>
    <Route exact path="/portfolio">
      <About />
    </Route>
    <Route exact path="/contact">
      <Contact />
    </Route>
    <Route>
      <NoMatch />
    </Route>
  </Switch>
</div>
</Router>

</Container>
  );
}

export default App;
