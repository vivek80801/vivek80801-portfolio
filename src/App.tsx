import React from "react";
import "./scss/App.scss";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";
import Default from "./components/pages/Default";
import Thanks from "./components/pages/Thanks";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/thanks"} exact component={Thanks} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
