import React from 'react';
import "./scss/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App: React.FC = (): JSX.Element => {
  return (
    <>
        <Navbar/>
        <Hero/>
    </>
  );
}

export default App;
