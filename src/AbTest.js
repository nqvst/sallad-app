import React from "react";
import styled from "styled-components";

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
  active,
  archived,
  created_at,
  updated_at,
}) => {
  return (
    <Root>
      <h3>{title}</h3>
      <p>{hypothesis}</p>
      Active <input type="checkbox" />
    </Root>
  );
};

export default AbTest;
