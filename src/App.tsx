import React from "react";
import "./App.scss";

import Header from "./components/header/Header";
import MainNavbar from "./components/Navigation/MainNavbar";
import Footer from "./components/footer/Footer";

import Home from "./views/Home";
// import UsaNews from "./views/UsaNews";
// import UKNews from "./views/UkNews";

import Category from "./views/Category";
import Article from "./views/Article";
import {CategoryConfig} from "./configs/CategoryConfig"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const categories = CategoryConfig();

  //"opinion", "sport", "culture", "lifestyle"

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

            {categories.map((link) => {
              return (
                <Route
                  path={`/${link.sectionId}`}
                  component={() => <Category category={`${link.sectionId}`} />}
                />
              );
            })}
            <Route path="/article/:id">
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
