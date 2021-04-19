import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Cleave from "cleave.js/react";

const Wrapper = styled.div`
  font-size: 25x;
`;

const Text = styled.span``;

const SCleave = styled(Cleave)`
  font-size: 250x;
`;

const App = () => {
  const [ct, setCt] = useState("22:30");

  const onTimeChange = (e) => setCt(e.target.value);

  return (
    <Wrapper>
      <Text>{ct} .....</Text>
      <SCleave
        size="10"
        placeholder="00:00"
        options={{ time: true, timePattern: ["h", "m"] }}
        //style={{ fontSize: "50px" }}
        onChange={onTimeChange}
        value={ct}
      />
    </Wrapper>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
