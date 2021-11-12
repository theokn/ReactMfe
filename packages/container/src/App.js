import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import ShowMessage from "./components/ShowMessage";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <ShowMessage></ShowMessage>
        <Header></Header>
        <MarketingApp></MarketingApp>
      </div>
    </BrowserRouter>
  );
};