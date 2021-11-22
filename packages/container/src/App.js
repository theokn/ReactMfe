import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import ShowMessage from "./components/ShowMessage";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <p>cicd21 --- test, new feature from dev</p>
          <ShowMessage></ShowMessage>
          <Header></Header>
          <MarketingApp></MarketingApp>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
