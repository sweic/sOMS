import styled from "styled-components";
import { color } from "../../../../../styles/constants";

export const KitchenOrdersContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const KitchenOrdersBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
`;

export const KitchenOrderItem = styled.div`
  flex-basis: 330px;
  flex-grow: 0;
  height: 420px;
`;

export const KitchenOrderContent = styled.div`
  display: block;
  overflow-y: auto;
`;

export const KitchenOrderHeading = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${color.primary};
  color: white;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
`;

export const KitchenOrderHeadingComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
export const KitchenOrderHeadingComponentRight = styled(
  KitchenOrderHeadingComponent
)`
  align-items: flex-end;
`;

export const KitchenOrderActions = styled.div`
  display: flex;
  gap: 1em;
`;

export const KitchenOrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5em;
  overflow-y: auto;
  height: 300px;
`;

export const KitchenOrderItemDetails = styled.div`
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(0 0 0 / 0.2);
`;
