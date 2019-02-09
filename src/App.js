import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route component={NavTabs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
