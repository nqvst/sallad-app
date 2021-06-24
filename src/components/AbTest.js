import React from "react";
import styled from "styled-components";
import Progress from "./Progress";

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
  start,
  end,
  max,
  percentage,
  active,
  archived,
  created_at,
  updated_at,
}) => {
  return (
    <Root>
      <h3>{title}</h3>
      <p>{hypothesis}</p>
      Active: {active}
      <Progress width={percentage} />
    </Root>
  );
};

export default AbTest;
