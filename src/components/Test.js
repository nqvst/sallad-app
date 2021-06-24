import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Progress from "./Progress";
import { useParams } from "react-router";
import config from "../config";
import {
  RIEToggle,
  RIEInput,
  RIETextArea,
  RIENumber,
  RIETags,
  RIESelect,
} from "riek";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const { API_URL } = config[process.env.NODE_ENV];

const Test = () => {
  const { testId } = useParams();
  const [test, setTest] = useState();

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const res = await fetch(`${API_URL}/tests/${testId}`);
        const test = await res.json();
        setTest(test);
      } catch (e) {
        console.error(e);
      }
    };
    if (!test) {
      fetchTest();
    }
  }, [test]);

  if (!test) {
    return <div>Loading...</div>;
  }
  const httpTaskCallback = (task) => {
    console.log({ test, task });
    setTest({ ...test, ...task });
  };

  return (
    <Root>
      ID: <pre>{test.uuid}</pre>
      <h1>
        <RIEInput
          value={test.title}
          change={httpTaskCallback}
          propName="title"
          validate={(s) => Boolean(s)}
        />
      </h1>
      <p>
        <RIETextArea
          value={test.hypothesis}
          change={httpTaskCallback}
          propName="hypothesis"
          validate={(s) => Boolean(s)}
        />
      </p>
      <RIEToggle
        value={test.active}
        change={httpTaskCallback}
        propName="active"
      />
      <RIENumber
        value={test.percentage}
        change={httpTaskCallback}
        propName="percentage"
      />
      <Progress width={test.percentage} />
    </Root>
  );
};

export default Test;
