import React from "react";
import tw from "tailwind-styled-components";
import GlobalStyle from "./GlobalStyle";
import Router from "./Router";

const Text = tw.span`
text-blue-600
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
