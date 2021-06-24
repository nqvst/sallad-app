import React from "react";
import styled from "styled-components";
import Progress from "./Progress";
import { Link } from "react-router-dom";
const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const AbTest = ({
  title,
  hypothesis,
  uuid,
  percentage,
  active,
  updated_at,
}) => {
  return (
    <Root>
      <Progress width={percentage} />
      ID: <pre>{uuid}</pre>
      <h2>{title}</h2>
      <p>{hypothesis}</p>
      Active: {active}
      <Link to={"test/" + uuid}>edit</Link>
      <p>last edited: {new Date(updated_at).toDateString()}</p>
    </Root>
  );
};

export default AbTest;
