import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 0.5em;
  padding-left: min(1.5em, 2vw);
  padding-right: min(1.5em, 2vw);
  overflow-y: hidden;
`;

export const CartTableBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: calc(100% - 100px) !important;
  @media (min-width: 1000px) {
    width: 600px;
  }
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding-bottom: 1em;
`;

export const CartFoodItems = styled.div`
  display: block;
  height: 100%;
  min-height: 0;
  overflow-y: auto;
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.5em;
  padding-right: 0.5em;
`;

export const CartTotalPrice = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5em; 1em;
`;

export const CartFoodItemBox = styled.div`
  border-bottom: 1px gray solid;
  display: flex;
  min-width: 0;
  height: 120px;
  align-items: flex-start;
  margin: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;
export const CartFoodItemTop = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;
export const CartFoodItemBottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.8em;
`;

export const CartFoodTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  max-width: 80%;
  height: 100%;
`;

export const CartFoodText = styled.span`
  margin-right: 0.5em;
  font-size: 0.8rem;
`;

export const CartFoodName = styled.span`
  margin-right: 0.5rem;
  align-self: center;
  font-size: 0.9rem;
  overflow-wrap: anywhere;
`;
export const CartFoodRight = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 0.5em;
  height: 100%;
`;
