import React from "react";
import styled from "styled-components";
import AbTest from "./AbTest";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px black dashed;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
`;

const StyledListItem = styled.li`
  list-style: none;
  border: 1px black dashed;
  margin: 20px;
`;

const Main = ({ tests, max }) => {
  return (
    <Root>
      <ul>
        {tests.length !== 0 &&
          tests.map((t) => {
            return (
              <StyledListItem key={t.uuid}>
                <AbTest {...t} max={max} />
              </StyledListItem>
            );
          })}
      </ul>
    </Root>
  );
};

export default Main;
