import styled from "styled-components";

export const DashboardBox = styled.div`
  height: 100%;
  display: inline-flex;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DashboardContent = styled.div`
  width: 100%;
`;
