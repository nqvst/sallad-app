import { useEffect, useState } from "react";
import styled from "styled-components";
import Main from "./Main";
import config from "./config";

const { API_URL } = config[process.env.NODE_ENV];

const Header = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Root = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
`;

const App = () => {
  const [abTests, setAbTests] = useState([]);

  useEffect(() => {
    const fetchAbTests = async () => {
      try {
        const res = await fetch(`${API_URL}/tests/all`);
        const tests = await res.json();
        setAbTests(tests);
      } catch (e) {
        console.error(e);
      }
    };
    if (!abTests.length) {
      fetchAbTests();
    }
  }, [abTests]);

  return (
    <Root>
      <Header>
        <h1>Simple A/B Test</h1>
      </Header>
      <Main tests={abTests} />
    </Root>
  );
};

export default App;
