import React from "react";
import "./App.scss";

import Header from "./components/header/Header";
import MainNavbar from "./components/Navigation/MainNavbar";
import Footer from "./components/footer/Footer";

import Home from "./views/Home";
import UsaNews from "./views/UsaNews";
import UKNews from "./views/UkNews";

import Category from "./views/Category";
import Article from "./views/Article";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <MainNavbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/usa-news">
              <UsaNews />
            </Route>
            <Route path="/uk-news">
              <UKNews />
            </Route>
            <Route
              path="/uk-entertainment"
              component={() => <Category category={`film`} />}
            />
            <Route
              path="/uk-health"
              component={() => <Category category={`community`} />}
            />
            <Route
              path="/uk-science"
              component={() => <Category category={`science`} />}
            />
            <Route
              path="/uk-business"
              component={() => <Category category={`business`} />}
            />
            <Route
              path="/uk-sports"
              component={() => <Category category={`sport`} />}
            />
            <Route
              path="/uk-technology"
              component={() => <Category category={`technology`} />}
            />

              <Route
              path="/article/:id"
                >
              <Article />
            </Route> 
             
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
