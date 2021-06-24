import React from "react";
import styled from "styled-components";

const Root = styled.div`
  border-radius: 5px;
  height: 35px;
  display: flex;
  width: 100%;
  flex-direction: row;
  border: 1px solid silver;
`;

const ProgressInside = styled.div`
  border-radius: 4px;
  display: flex;
  width: ${({ width = 10 }) => width}%;
  margin-left: ${({ offset = 0 }) => offset}%;
  flex-direction: row;
  background-color: green;
  position: relative;
  transition: width 200ms ease-in-out;
`;

const ProgressText = styled.span`
  position: absolute;
  color: white;
  font-weight: bold;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;

const Progress = ({ width }) => {
  const text = `${width}%`;
  return (
    <Root>
      <ProgressInside width={width}>
        <ProgressText>{text}</ProgressText>
      </ProgressInside>
    </Root>
  );
};

export default Progress;
