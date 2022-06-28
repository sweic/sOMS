import styled from "styled-components";

export const ActiveServiceContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0.5em 1.5em;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

export const ActiveServiceHeadings = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;
`;

export const ActiveServiceContent = styled.div`
  padding: 0.5em 1.5em;
  min-height: 0;
  height: calc(100vh - 10em);
  width: 100%;
`;
