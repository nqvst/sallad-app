import { useEffect, useState } from "react";
import styled from "styled-components";
import Main from "./components/Main";
import config from "./config";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Test from "./components/Test";

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
  return (
    <Root>
      <Router>
        <div>
          <Switch>
            <Route path="/test/:testId">
              <Test />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Root>
  );
};

const Home = () => {
  const [abTests, setAbTests] = useState([]);
  const [max, setMax] = useState([]);

  useEffect(() => {
    const fetchAbTests = async () => {
      try {
        const res = await fetch(`${API_URL}/tests/all`);
        const tests = await res.json();
        setAbTests(tests.tests);
        setMax(tests.max);
      } catch (e) {
        console.error(e);
      }
    };
    if (!abTests.length) {
      fetchAbTests();
    }
  }, [abTests]);
  return (
    <>
      <Header>
        <h1>Simple A/B Test</h1>
      </Header>
      <Main tests={abTests} max={max} />
    </>
  );
};

export default App;
