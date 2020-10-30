import React from "react";
import Skeleton from "react-loading-skeleton";
import "./App.scss";

import Header from "./components/header/Header";

import MainNavbar from "./components/Navigation/MainNavbar";
import Footer from "./components/footer/Footer";

import SearchResults from "./views/SearchResults";

import { CategoryConfig } from "./configs/CategoryConfig";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./views/Home"));
const Category = React.lazy(() => import("./views/Category"));
const Article = React.lazy(() => import("./views/Article"));
const SearchArticle = React.lazy(() => import("./views/SearchArticle"));

const App = () => {
  const categories = CategoryConfig();

  return (
    <div className="App">
      <Header />

      <React.Suspense fallback={<Skeleton duration={10} height={580} />}>
        <Router>
          <div>
            <MainNavbar />
            <Switch>
              <Route exact path="/" component={() => <Home />} />
              {categories.map((link, index) => {
                return (
                  <Route
                    exact
                    path={`/${link.sectionId}`}
                    component={() => (
                      <Category category={`${link.sectionId}`} />
                    )}
                    key={index}
                  />
                );
              })}
              <Route path="/article/:id" component={() => <Article />} />

              <Route
                path="/search-article/:id"
                component={() => <SearchArticle />}
              />

              <Route
                exact
                path={`/search-results`}
                component={() => <SearchResults />}
              />
              <Route path="*" component={() => (<div>404 Not found </div>)} />

            </Switch>
          </div>
        </Router>
      </React.Suspense>
      <Footer />
    </div>
  );
};

export default App;
