import React from "react";
import tw from "tailwind-styled-components";

const Text = tw.span`
text-blue-600
`;

function App() {
  return (
    <>
      <Text>Hello</Text>
    </>
  );
}

export default App;
